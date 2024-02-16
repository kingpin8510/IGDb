import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<game>(
    "https://api.rawg.io/api/games",
    { params: { genres: selectedGenre?.id } }
    ,[selectedGenre?.id]
  );
export default useGames;
