import DropDown from "../components/DropDown";
import InputField from "../components/InputField";
import SearchButton from "../components/SearchButton";
import DisplayRecordNum from "../components/DisplayRecordNum";
import DisplayCards from "../components/DisplayCards";
import TableDisplay from "../components/TableDisplay";

export default function Search({ state, dispatch }) {
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
