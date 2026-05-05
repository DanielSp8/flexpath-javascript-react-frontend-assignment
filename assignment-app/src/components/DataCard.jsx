import { displayType } from "../helpers/displayType";

export default function DataCard({ id, state, title }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body text-center">
          <h5 id={id} className="card-title text-center">
            {title}
          </h5>
          <p className="card-text text-center">
            Average - {state.avgMinsAppUsage} {displayType(title)}
          </p>
          <p className="card-text text-center">
            Median - {state.medianMinsAppUsage} {displayType(title)}
          </p>
        </div>
      </div>
    </div>
  );
}
