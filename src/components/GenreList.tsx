import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <List>
      {data &&
        data.map((gen: Genre) => (
          <ListItem key={gen.id} paddingY='5px'>
            <HStack>
              <Image boxSize={'32px'} borderRadius={8} src={getCroppedImage(gen.image_background)}></Image>
              <Text fontSize='lg'>{gen.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
