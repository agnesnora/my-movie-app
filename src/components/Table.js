import Modal from "./Modal";
export default function Table(props) {
  return (
    <div className="table--container">
      <p onClick={props.handleClickTitle}>{props.title}</p>
      {props.duration ? <p>{props.duration} (perc)</p> : <p>Nem elérhető</p>}
      <p>{props.release}</p>
      <p
        className={
          props.rating <= 3
            ? "red"
            : props.rating >= 4 && props.rating <= 7
            ? "black"
            : "green"
        }
        onClick={props.handleClickRating}
      >
        {props.rating ? props.rating : " -"}
      </p>
      <button>Törlés</button>
    </div>
  );
}
// {
//   /*  */
// }
