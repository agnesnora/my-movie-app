export default function Header(props) {
  return (
    <div className="header--container">
      <div className="header">
        <h1>The ultimate movie app</h1>
        <button onClick={props.handleRefresh}>Frissítés</button>{" "}
      </div>

      <div className="form--container">
        <input
          type="text"
          placeholder="Írj be egy filmcímet"
          className="form--input"
          name="topText"
          value={props.value}
          onChange={props.handleSearch}
        />
        <button
          className="form--button--search"
          // onClick={getMemeImage}
        >
          Keresés
        </button>
        <button
          className="form--button--clear"
          // onClick={getMemeImage}
        >
          Keresés törlése
        </button>
      </div>
    </div>
  );
}
