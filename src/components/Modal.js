export default function Modal(props) {
  // let productionBudgetSep = props.productionBudget;

  return (
    <div className="modal--container">
      <button className="btn--prev">Előző</button>
      <div className="modal--details--container">
        <h2>{props.title}</h2>
        <p>Rendező: {props.director ? props.director : "Nem elérhető"}</p>
        <p>
          Forgalmazó: {props.distributor ? props.distributor : "Nem elérhető"}
        </p>
        <p>
          Költségvetés:{" "}
          {props.productionBudget
            ? props.productionBudget.toLocaleString(true)
            : "Nem elérhető"}
        </p>
        <p>
          Összbevétel:
          {props.Worldwide_Gross
            ? props.Worldwide_Gross.toLocaleString(true)
            : "Nem elérhető"}
        </p>
        <button type="button">Bezárás</button>
      </div>
      <button className="btn--next">Következő</button>
    </div>
  );
}
