export default function DisplayRecordNum({ state }) {
  return (
    <div>
      {state.errorMessage && (
        <div className="alert alert-danger" role="alert">
          {state.errorMessage}
        </div>
      )}
      {state.isLoading && <p>Loading...</p>}
      {!state.isLoading && <div>Displaying {state.recordNumber} Records</div>}
    </div>
  );
}
