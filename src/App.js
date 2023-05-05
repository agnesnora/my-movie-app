import "./App.css";
import movies from "./movies.json";
import Header from "../src/components/Header.js";
import Table from "../src/components/Table";

function App() {
  console.log(movies);

  const moviesComponent = movies.map((film) => {
    return (
      <Table
        key={film.Id}
        title={film.Title}
        duration={film.Running_Time_min}
        release={film.Release_Date}
        rating={film.IMDB_Rating}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <Table
        title="Cím"
        duration="Hossz"
        release="Megjelenés dátuma"
        rating="Értékelés"
      />
      {moviesComponent}
    </div>
  );
}

export default App;
