import { useEffect } from "react";
import {
  giveAverageMinutes,
  giveMedianMinutes,
  giveOnScreenTimeAvg,
  giveOnScreenTimeMedian,
  giveNumOfAppsInstalledAvg,
  giveNumOfAppsInstalledMedian,
  giveAgeAvg,
  giveAgeMedian,
} from "../helpers/cardCalculations";

export function useFetch({ state, dispatch }) {
  useEffect(() => {
    if (state.errorMessage) {
      const timer = setTimeout(() => {
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: null,
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.errorMessage]);

  async function fetchData() {
    dispatch({ type: "SET_LOADING_TRUE" });
    try {
      const response = await fetch(
        `/api/data/search?filterType=${state.dropdownValue}&keyword=${state.inputFieldValue}`,
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      dispatch({
        type: "UPDATE_DATA_PLUS_OTHER_FIELDS",
        payload: {
          receivedData: data,
          recordNumber: data.length,
          avgMinsAppUsage: giveAverageMinutes(data),
          medianMinsAppUsage: giveMedianMinutes(data),
          screenTimeAvg: giveOnScreenTimeAvg(data),
          screenTimeMedian: giveOnScreenTimeMedian(data),
          avgNumApps: giveNumOfAppsInstalledAvg(data),
          medianNumApps: giveNumOfAppsInstalledMedian(data),
          avgAge: giveAgeAvg(data),
          medianAge: giveAgeMedian(data),
        },
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: error.message,
      });
    } finally {
      dispatch({ type: "SET_LOADING_FALSE" });
    }
  }
  return { fetchData };
}
