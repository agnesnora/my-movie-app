import "./App.css";
import movies from "./movies.json";
import Header from "../src/components/Header.js";
import Table from "../src/components/Table";
import Modal from "../src/components/Modal";
import { useState } from "react";

function App() {
  const [moviesArray, setMoviesArray] = useState(movies);
  console.log("moviesArrayem", moviesArray);

  function sortByTitle(arr, propertyName, order = "ascending") {
    const sortedArr = [...arr].sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0;
    });

    if (order === "descending") {
      return sortedArr.reverse();
    }
    console.log("sortedArr", sortedArr);

    return sortedArr;
  }

  function handleHeaderTitleClick(sortedArr) {
    setMoviesArray(sortByTitle(moviesArray, "Title"));
  }

  function handleHeaderRatingClick() {
    setMoviesArray(sortByTitle(moviesArray, "IMDB_Rating", "descending"));
  }

  // console.log(sortedProducts);

  const moviesComponent = moviesArray.map((film) => {
    return (
      <Table
        key={film.Id}
        title={film.Title}
        duration={film.Running_Time_min}
        release={film.Release_Date}
        rating={film.IMDB_Rating}
        id={film.Id}
      />
    );
  });

  //   <div>
  //   {names.filter(name => name.includes('J')).map(filteredName => (
  //     <li>
  //       {filteredName}
  //     </li>
  //   ))}
  // </div>
  const filtered = moviesArray
    .filter((film) => {
      return film.Title === "102 Dalmatians";
    })
    .map((film) => {
      return (
        <Modal
          key="hello"
          title={film.Title}
          director={film.Director}
          distributor={film.Distributor}
          productionBudget={film.Production_Budget}
          gross={film.Worldwide_Gross}
        />
      );
    });
  console.log(filtered);

  return (
    <div className="App">
      <Header />
      {filtered}
      <Table
        title="Cím"
        duration="Hossz"
        release="Megjelenés dátuma"
        rating="Értékelés"
        delete="Törlés"
        handleClickTitle={handleHeaderTitleClick}
        handleClickRating={handleHeaderRatingClick}
      />
      {moviesComponent}
    </div>
  );
}

export default App;
