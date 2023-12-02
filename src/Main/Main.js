import React, { useState } from "react";
import ListBox from "./ListBox/ListBox";
import Box2 from "./WatchBox/WatchBox";

const Main = ({ tempMovieData, tempWatchedData, movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <main className="main">
      <ListBox movies={movies} isOpen1={isOpen1} setIsOpen1={setIsOpen1} />
      <Box2 tempWatchedData={tempWatchedData} />
    </main>
  );
};

export default Main;
