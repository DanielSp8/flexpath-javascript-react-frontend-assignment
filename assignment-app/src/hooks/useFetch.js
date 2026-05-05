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
    dispatch({ type: "SET_LOADING_TRUE", field: "isLoading", value: true });
    try {
      const response = await fetch(
        `/api/data/search?filterType=${state.dropdownValue}&keyword=${state.inputFieldValue}`,
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const dataReceived = await response.json();
      dispatch({
        type: "RECEIVE_DATA",
        payload: dataReceived,
      });
      console.log(state.receivedData);
    } catch (error) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        field: "errorMessage",
        value: error,
      });
    } finally {
      dispatch({ type: "SET_LOADING_FALSE", field: "isLoading", value: false });
    }
  }
  return { fetchData };
}
