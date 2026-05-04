export default function InputField({ state, dispatch }) {
  const handleInputChange = (event) => {
    dispatch({
      type: "UPDATE_INPUT_FIELD",
      field: "inputFieldValue",
      value: event.target.value,
    });
  };

  return (
    <>
      <input
        className="form-control"
        id="search-bar"
        aria-label="input field"
        placeholder="Search by Keyword"
        type="text"
        value={state.InputFieldValue}
        onChange={handleInputChange}
        style={{ width: "26rem" }}
      />
    </>
  );
}
