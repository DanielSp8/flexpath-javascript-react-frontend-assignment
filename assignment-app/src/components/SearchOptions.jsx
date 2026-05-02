import { useState } from "react";

export default function SearchOptions() {
  const [filterDrop, setFilterDrop] = useState("model");
  const [filterInput, setFilterInput] = useState("");

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
              // disabled...
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
