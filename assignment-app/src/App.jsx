import React, { useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING_TRUE":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "UPDATE_DROPDOWN_BOX": {
      return {
        ...state,
        dropdownValue: action.payload,
      };
    }
    case "UPDATE_INPUT_FIELD": {
      return {
        ...state,
        inputFieldValue: action.payload,
      };
    }
    case "UPDATE_DATA_PLUS_OTHER_FIELDS": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  isLoading: false,
  errorMessage: null,
  dropdownValue: "model",
  inputFieldValue: "",
  receivedData: [],
  recordNumber: 0,
  avgMinsAppUsage: 0,
  medianMinsAppUsage: 0,
  screenTimeAvg: 0,
  screenTimeMedian: 0,
  avgNumApps: 0,
  medianNumApps: 0,
  avgAge: 0,
  medianAge: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link to="/" className="navbar-brand ms-4 nav-link">
          User Behavior Data
        </Link>
        <Link to="/Search" className="navbar-brand ms-3 nav-link">
          <span className="navbar-text h7">Search Through Dataset</span>
        </Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Search"
          element={<Search state={state} dispatch={dispatch} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
