import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* <PlatformIcons platforms={game.parent_platform.map(p => p.platform)}></PlatformIcons> 
            an error occurs at the map part in the platformicons.tsx file
            error still unchecked
        */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
