import { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: platform | null
  gameQuery: GameQuery
) =>
  useData<game>(
    "https://api.rawg.io/api/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      },
    },
    [gameQuery] // dependencies are handled by just one, as it will be rendered and refreshed
  );
export default useGames;
