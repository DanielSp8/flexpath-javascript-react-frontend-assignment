import { giveAverage } from "../helpers/giveAverage";
import { displayType } from "../helpers/displayType";

export default function DataCard(
  id,
  data,
  title,
  medianNum = "medianNum",
  typeOfCalc = "typeOfCalc",
) {
  return (
    <div className="col">
      <div className="card">
        <h5 id={id} className="card-title text-center">
          {title}
        </h5>
        <p className="card-text text-center">
          Average - {data.length > 0 ? giveAverage(data, title) : 0}
          {displayType(title)}
        </p>
        <p className="card-text text-center">
          Median - {medianNum} {typeOfCalc}
        </p>
      </div>
    </div>
  );
}
