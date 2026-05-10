import { useReducer } from "react";
import DropDown from "../components/DropDown";
import InputField from "../components/InputField";
import SearchButton from "../components/SearchButton";
import DisplayRecordNum from "../components/DisplayRecordNum";
import DisplayCards from "../components/DisplayCards";
import TableDisplay from "../components/TableDisplay";

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

export default function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="row mb-4">
        <DropDown state={state} dispatch={dispatch} />
        <div className="container mt-4">
          <InputField state={state} dispatch={dispatch} />
          <SearchButton state={state} dispatch={dispatch} />
          <DisplayRecordNum state={state} />
          <DisplayCards state={state} />
          <TableDisplay
            receivedData={state.receivedData}
            isLoading={state.isLoading}
            errorMessage={state.errorMessage}
          />
        </div>
      </div>
    </div>
  );
}
