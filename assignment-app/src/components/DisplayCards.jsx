import DataCard from "./DataCard";

export default function DisplayCards({ state }) {
  return (
    <div className="row mt-2 mb-3">
      <DataCard id={1} state={state} title={"App Usage Time (min/day)"} />
      <DataCard id={2} state={state} title={"App Usage Time (min/day)"} />
      <DataCard id={3} state={state} title={"App Usage Time (min/day)"} />
      <DataCard id={4} state={state} title={"App Usage Time (min/day)"} />

      {/* <DataCard id={2} data={data} title="Screen On Time (hours/day)" />
      <DataCard id={3} data={data} title="Number of Apps Installed" />
      <DataCard id={4} data={data} title="Age" /> */}
    </div>
  );
}
