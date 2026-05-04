export default function DropDown({ state, dispatch }) {
  const handleDropChange = (event) => {
    dispatch({
      type: "UPDATE_DROPDOWN_BOX",
      nextValue: event.target.value,
    });
  };

  return (
    <>
      <label className="mt-3">Select data point to filter search by</label>
      <div className="mt-2">
        <select
          className="form-select border w-25 text-start"
          value={state.dropdownValue}
          onChange={handleDropChange}
        >
          <option value="model">model</option>
          <option value="gender">gender</option>
          <option value="operatingSystem">operatingSystem</option>
          <option value="behaviorClass">behaviorClass</option>
        </select>
      </div>
    </>
  );
}
