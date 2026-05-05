export default function DisplayRecordNum({ state }) {
  return (
    <div className="mt-2">
      {state.errorMessage && (
        <div className="alert alert-danger" role="alert">
          {state.errorMessage}
        </div>
      )}
      {(state.isLoading && <p>Loading...</p>) ||
        (state.receivedData.length === 0 && <p>No Records to Display</p>) || (
          <p>Displaying {state.receivedData.length} Records</p>
        )}
    </div>
  );
}
