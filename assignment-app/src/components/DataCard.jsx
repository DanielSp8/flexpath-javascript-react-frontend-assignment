import { displayType } from "../helpers/displayType";

export default function DataCard({ id, avg, median, title }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body text-center">
          <h5 id={id} className="card-title text-center">
            {title}
          </h5>
          <p className="card-text text-center">
            Average - {avg} {displayType(title)}
          </p>
          <p className="card-text text-center">
            Median - {median} {displayType(title)}
          </p>
        </div>
      </div>
    </div>
  );
}
