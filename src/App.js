import "./App.css";
import movies from "./movies.json";
import Header from "../src/components/Header.js";
import Table from "../src/components/Table";
import Modal from "../src/components/Modal";
import { useState } from "react";

function App() {
  const [moviesArray, setMoviesArray] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const getMovieDetail = (e) => {
    if (e.target.dataset.select) {
      selectMovie(e.target.dataset.select);
      console.log("selectedMovie", selectedMovie);
    }
  };

  function selectMovie(filmId) {
    const targetMovieObj = moviesArray.filter((movie) => {
      return movie.Id == filmId;
    });
    console.log("targetMovieObj:", targetMovieObj[0].Title);
    setSelectedMovie({ ...targetMovieObj });

    // .map((film) => {
    //   return (
    //     <Modal
    //       key="hello"
    //       title={film.Title}
    //       director={film.Director}
    //       distributor={film.Distributor}
    //       productionBudget={film.Production_Budget}
    //       gross={film.Worldwide_Gross}
    //     />
    //   );
    // });
  }

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

    return sortedArr;
  }

  function handleHeaderTitleClick() {
    setMoviesArray(sortByTitle(moviesArray, "Title"));
  }

  function handleHeaderRatingClick() {
    setMoviesArray(sortByTitle(moviesArray, "IMDB_Rating", "descending"));
  }
  function deleteLine() {
    console.log(filtered);
  }

  function refresh() {
    setMoviesArray(movies);
    console.log("sssssssssssssssssss");
  }
  function search(event) {
    setSearchValue(event.target.value);
    console.log(searchValue);
  }

  const tableStyle = {
    fontWeight: "500",
  };
  const moviesComponent = moviesArray.map((film) => {
    return (
      <Table
        key={film.Id}
        title={film.Title}
        duration={film.Running_Time_min}
        release={film.Release_Date}
        rating={film.IMDB_Rating}
        id={film.Id}
        handleSelectFilm={getMovieDetail}
        handleLineDelete={deleteLine}
        style={tableStyle}
      />
    );
  });

  let filtered = moviesArray
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
  const lineStyle = {
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "#F24405",
    fontFamily: "Francois One",
  };
  return (
    <div className="App">
      <Header
        handleRefresh={refresh}
        handleSearch={search}
        value={searchValue}
      />
      {filtered}
      <Table
        style={lineStyle}
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
// function selectMovie(filmId) {
//   console.log("movies", moviesArray);
//   const targetMovieObj = moviesArray.filter((movie) => {
//     return movie.Id == filmId;
//   })[0];

//   console.log("targetMovieObj:", targetMovieObj);
//   filtered = targetMovieObj;
//   console.log("filter", filtered);
// // }
// .map((film) => {
//   return (
//     <Modal
//       key="hello"
//       title={film.Title}
//       director={film.Director}
//       distributor={film.Distributor}
//       productionBudget={film.Production_Budget}
//       gross={film.Worldwide_Gross}
//     />
//   );
// });
