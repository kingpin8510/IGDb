import { useState, useEffect } from "react";
import clientApi from "../services/client-api";

interface game {
  id: number;
  name: string;
}

interface fetchgames {
  count: number;
  results: game[];
}

function useGames() {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    clientApi
      .get<fetchgames>("https://api.rawg.io/api/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
}

export default useGames;
