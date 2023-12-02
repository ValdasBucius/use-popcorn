import React, { useState } from "react";
import Button from "../../reusableComponents/Button";

const WatchBox = ({ tempWatchedData }) => {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <Button isOpen={isOpen2} setIsOpen={setIsOpen2} />

      {isOpen2 && (
        <>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchBox;

function Summary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedListLiComponent key={movie.imbID} movie={movie} />
      ))}
    </ul>
  );
}

function WatchedListLiComponent({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <WatchedListItem icon="⭐️" content={movie.imdbRating} />
        <WatchedListItem icon="⭐️" content={movie.userRating} />
        <WatchedListItem icon="⏳" content={movie.runtime} />
      </div>
    </li>
  );
}

function WatchedListItem({ icon, content }) {
  return (
    <p>
      <span>{icon}</span>
      <span>{content}</span>
    </p>
  );
}
