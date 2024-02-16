import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hooks/useGames";

export interface GameQuery{
  genre: Genre | null;
  platform: platform | null; 

}

const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<platform | null>(null); "says this code looks ugly"
  //To check if the hooks are working or not go for the components in the dev tools of chrome

  return (
    <div>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav nav" "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={"8px"}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
