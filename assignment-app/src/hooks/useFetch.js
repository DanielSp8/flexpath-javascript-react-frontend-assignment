export function useFetch(
  dataPoint,
  keywordItem,
  setIsLoading,
  setErrorMessage,
  setData,
) {
  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/data/search?filterType=${dataPoint}&keyword=${keywordItem}`,
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const dataReceived = await response.json();
      setData(dataReceived);
      console.log(dataReceived);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { fetchData };
}
