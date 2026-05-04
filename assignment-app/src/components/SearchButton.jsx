export default function SearchButton({ state, dispatch }) {
  const fetchTheData = () => {
    console.log(`Fetching the data test...`);
  };

  return (
    <div className="mt-3">
      <button
        type="button"
        className="btn text-center form-control border"
        style={{ width: "26rem" }}
        disabled={state.isLoading}
        onClick={fetchTheData}
      >
        Search
      </button>
    </div>
  );
}
