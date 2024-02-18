
import genres from "../Data/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


// const useGenres = () => useData<Genre>('https://api.rawg.io/api/genres');
//Have to use the shipping method so as to remove the loading sign

const useGenres = () => ({ data: genres, isLoading: false, error: null});

export default useGenres;
