export default function Header() {
  function handleClick() {
    console.log("refresh clicked");

    // window.location.reload(true);
  }

  return (
    <div className="header">
      <h1>The ultimate movie app</h1>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}
