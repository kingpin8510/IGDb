import { useState, useEffect } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platform: { platform: platform }[];
  metacritic: number;
}

export interface fetchgames {
  count: number;
  results: game[];
}

function useGames() {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    clientApi
      .get<fetchgames>("https://api.rawg.io/api/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;
