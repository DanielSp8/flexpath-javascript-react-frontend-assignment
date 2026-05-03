export default function RecordsNumDisplay({
  isLoading,
  recordsNum = 0,
  errorMessage,
}) {
  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {!isLoading && <div>Displaying {recordsNum} Records</div>}
    </div>
  );
}
