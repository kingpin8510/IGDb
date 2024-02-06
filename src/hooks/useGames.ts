import { useState, useEffect } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";

export interface platform{
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platform: {platform: platform}[];
  metacritic: number;
}

export interface fetchgames {
  count: number;
  results: game[];
}

function useGames() {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    clientApi
      .get<fetchgames>("https://api.rawg.io/api/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;
