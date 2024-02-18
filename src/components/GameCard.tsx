import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { game } from "../hooks/useGames";
import CriticScore from "./criticScore";
import getCroppedImage from "../services/image-url";
import Emoji from "./Emoji";
// import PlatformIcons from "./PlatformIcons";

interface Props {
  game: game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3}>
          {/* <PlatformIcons platforms={game.parent_platform.map(p => p.platform)}></PlatformIcons> 
            
            ->an error occurs at the map part in the platformicons.tsx file
            error still unchecked

            ->Here the hstack is implemented to organize them into one line

            <hstack justifycontent={'space around'}></hstack>
        */}
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
