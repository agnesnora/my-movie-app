export default function Modal(props) {
  // let productionBudgetSep = props.productionBudget;
  let dollarSign = "$";
  return (
    <div className="modal--container">
      <button className="btn--prev">&#x2B9C;</button>
      <div className="modal--details--container">
        <h2>{props.title}</h2>
        <p>Rendező: {props.director ? props.director : "Nem elérhető"}</p>
        <p>
          Forgalmazó: {props.distributor ? props.distributor : "Nem elérhető"}
        </p>
        <p>
          Költségvetés:{" "}
          {props.productionBudget
            ? props.productionBudget.toLocaleString(true) + dollarSign
            : "Nem elérhető"}
        </p>
        <p>
          Összbevétel:
          {props.Worldwide_Gross
            ? props.Worldwide_Gross.toLocaleString(true) + dollarSign
            : "Nem elérhető"}
        </p>
        <button type="button"> &#x2715; </button>
      </div>
      <button className="btn--next">&#x2B9E;</button>
    </div>
  );
}
