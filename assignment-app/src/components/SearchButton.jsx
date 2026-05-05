import { useFetch } from "../hooks/useFetch";

export default function SearchButton({ state, dispatch }) {
  const { fetchData } = useFetch({ state, dispatch });

  return (
    <div className="mt-3">
      <button
        type="button"
        className="btn text-center form-control border"
        style={{ width: "26rem" }}
        disabled={state.isLoading}
        onClick={fetchData}
      >
        Search
      </button>
    </div>
  );
}
