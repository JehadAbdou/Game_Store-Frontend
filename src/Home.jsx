import React, { useState, useEffect } from "react";
import GameCart from "./GameCart";
import axios from "axios";

const url = "http://localhost:5000/games"; // Correct URL

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 8;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        setGames(data);
      } catch (error) {
        console.log(error.response);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="games-container">
      <ul className="games-list">
        {currentGames.map((game) => (
          <GameCart
            key={game.id}
            {...game}
          />
        ))}
      </ul>
      <div className="pagination-controls">
        {Array.from(
          { length: Math.ceil(games.length / gamesPerPage) },
          (_, index) => (
            <button
              className="pagination-button"
              key={index + 1}
              onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
