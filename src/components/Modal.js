export default function Modal(props) {
  let productionBudgetSep = props.productionBudget;
  console.log(productionBudgetSep);
  return (
    <div className="modal--container">
      <h2>{props.Title}</h2>
      <p>{props.director}</p>
      <p>{props.distributor}</p>
      <p>{productionBudgetSep.toLocaleString(true)}</p>
      <p>{props.Worldwide_Gross}</p>
    </div>
  );
}
