import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  /*return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );*/

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardSkeleton key={skeleton}></CardSkeleton> 
          ))}
        {games &&
          games.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
