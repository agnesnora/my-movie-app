export default function Header() {
  function handleClick() {
    console.log("refresh clicked");
  }

  return (
    <div className="header--container">
      <div className="header">
        <h1>The ultimate movie app</h1>
        <button onClick={handleClick}>Refresh</button>{" "}
      </div>

      <div className="form--container">
        <input
          type="text"
          placeholder="Írj be egy filmcímet"
          className="form--input"
          name="topText"
          // value={}
          // onChange={}
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
