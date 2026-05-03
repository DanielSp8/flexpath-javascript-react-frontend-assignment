import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import RecordsNumDisplay from "./RecordsNumDisplay";

export default function SearchOptions() {
  const [isLoading, setIsLoading] = useState(false);
  const [filterDrop, setFilterDrop] = useState("model");
  const [filterInput, setFilterInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const { fetchData } = useFetch(
    filterDrop,
    filterInput,
    setIsLoading,
    setErrorMessage,
    setData,
  );

  const handleDropChange = (event) => {
    setFilterDrop(event.target.value);
  };

  const handleInputChange = (event) => {
    setFilterInput(event.target.value);
  };

  return (
    <div className="container">
      <div className="row mb-4">
        <label className="mt-3">Select data point to filter search by</label>
        <div className="mt-2">
          <select
            className="form-select border w-25 text-start"
            value={filterDrop}
            onChange={handleDropChange}
          >
            <option value="model">model</option>
            <option value="gender">gender</option>
            <option value="operatingSystem">operatingSystem</option>
            <option value="behaviorClass">behaviorClass</option>
          </select>
        </div>

        <div className="container mt-4">
          <input
            className="form-control"
            id="search-bar"
            aria-label="input field"
            placeholder="Search by Keyword"
            type="text"
            value={filterInput}
            onChange={handleInputChange}
            style={{ width: "26rem" }}
          />
          <div className="mt-3">
            <button
              type="button"
              className="btn text-center form-control border"
              style={{ width: "26rem" }}
              disabled={isLoading}
              onClick={fetchData}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <RecordsNumDisplay
        isLoading={isLoading}
        recordsNum={data.length || 0}
        errorMessage={errorMessage}
      />
    </div>
  );
}
