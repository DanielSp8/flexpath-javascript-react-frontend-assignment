import DataCard from "./DataCard";

export default function DisplayDataCards(data) {
  return (
    <div>
      <DataCard id={1} data={data} title={"App Usage Time (min/day)"} />
      <DataCard id={2} data={data} title="Screen On Time (hours/day)" />
      <DataCard id={3} data={data} title="Number of Apps Installed" />
      <DataCard id={4} data={data} title="Age" />
    </div>
  );
}
