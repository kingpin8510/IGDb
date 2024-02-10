
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



const useGames = () => useData<game>('https://api.rawg.io/api/games');
export default useGames;
