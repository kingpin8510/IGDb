import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { Text } from "@chakra-ui/react";

interface game {
  id: number;
  name: string;
}

interface fetchgames {
  count: number;
  results: game[];
}

function GameGrid() {
    const [games, setGames] = useState<game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        clientApi
            .get<fetchgames>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    });
    return(
    <>
        {error && <Text>{error}</Text>}
        <ul>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    </>);
}

export default GameGrid;
