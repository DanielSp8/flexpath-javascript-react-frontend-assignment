import { useEffect } from "react";

export function useFetch({ state, dispatch }) {
  useEffect(() => {
    if (state.errorMessage) {
      const timer = setTimeout(() => {
        dispatch(
          {
            type: "SET_ERROR_MESSAGE",
            field: "errorMessage",
            value: null,
          },
          5000,
        );
        return () => clearTimeout(timer);
      }, [state.errorMessage]);
    }
  });

  async function fetchData() {
    dispatch({ type: "SET_LOADING_TRUE" });
    try {
      const response = await fetch(
        `/api/data/search?filterType=${state.dropdownValue}&keyword=${state.inputFieldValue}`,
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const dataReceived = await response.json();
      dispatch({
        type: "UPDATE_DATA_PLUS_OTHER_FIELDS",
        payload: {
          receivedData: dataReceived,
          recordNumber: dataReceived.length,
        },
      });
      console.log(state.receivedData);
    } catch (error) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: error,
      });
    } finally {
      dispatch({ type: "SET_LOADING_FALSE" });
    }
  }
  return { fetchData };
}
