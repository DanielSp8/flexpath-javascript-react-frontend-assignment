export default function TableDisplay({
  receivedData,
  isLoading,
  errorMessage,
}) {
  return (
    <>
      {errorMessage && <p className="text-danger">Error: {errorMessage}</p>}
      {(!isLoading && (
        <table className="table table-striped">
          <thead>
            <tr key="tableMenu">
              <th scope="col">User ID</th>
              <th scope="col">Device Model</th>
              <th scope="col">Operating System</th>
              <th scope="col">App Usage Time (min/day)</th>
              <th scope="col">Screen On Time (hours/day)</th>
              <th scope="col">Battery Drain (mAh/day)</th>
              <th scope="col">Number of Apps Installed</th>
              <th scope="col">Data Usage (MB/day)</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">User Behavior Class</th>
            </tr>
          </thead>
          <tbody>
            {receivedData.map((item) => (
              <tr key={item["User ID"]}>
                {Object.entries(item).map(([key, value], index) => (
                  <td key={`${item[key]}-${index}-${value}`}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )) || <p>Loading Records...</p>}
    </>
  );
}
