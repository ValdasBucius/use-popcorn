import React from "react";
import Button from "../../reusableComponents/Button";

const ListBox = ({ isOpen1, setIsOpen1, movies }) => {
  return (
    <div className="box">
      <Button isOpen={isOpen1} setIsOpen={setIsOpen1} />
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;

function MovieList({ movies }) {
  console.log(movies);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

function ListItem({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
