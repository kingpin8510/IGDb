import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}

 interface fetchGenres{
    count: number;
    results: Genre[];
 } 

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    clientApi
      .get<fetchGenres>("https://api.rawg.io/api/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
