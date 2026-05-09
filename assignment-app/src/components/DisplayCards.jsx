import DataCard from "./DataCard";

export default function DisplayCards({ state }) {
  return (
    <div className="row mt-2 mb-3">
      <DataCard
        id={1}
        avg={state.avgMinsAppUsage}
        median={state.medianMinsAppUsage}
        title={"App Usage Time (min/day)"}
      />
      <DataCard
        id={2}
        avg={state.screenTimeAvg}
        median={state.screenTimeMedian}
        title={"Screen On Time (hours/day)"}
      />
      <DataCard
        id={3}
        avg={state.avgNumApps}
        median={state.medianNumApps}
        title={"Number of Apps Installed"}
      />
      <DataCard
        id={4}
        avg={state.avgAge}
        median={state.medianAge}
        title={"Age"}
      />
    </div>
  );
}
