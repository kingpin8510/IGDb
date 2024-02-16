import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner />;
    // Can be betterif we add a whole skeleton to this
  }

  if (error) {
    return null;
  }

  return (
    <List>
      {data &&
        data.map((gen: Genre) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImage(gen.image_background)}
              ></Image>
              <Button
                fontWeight={gen.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(gen)}
                fontSize="lg"
                variant="link"
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
