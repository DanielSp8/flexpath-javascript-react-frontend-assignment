export default function RecordsNumDisplay(loading, recordsNum, errorMessage) {
  if (errorMessage)
    return (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    );

  if (loading) return <div>Loading...</div>;

  if (recordsNum === 0) return <div>No Records to Display</div>;

  return <div>Displaying {recordsNum} Records</div>;
}
