export default function Header() {
  function handleClick() {
    console.log("refresh clicked");
  }

  return (
    <div className="header">
      <h1>The ultimate movie app</h1>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}
