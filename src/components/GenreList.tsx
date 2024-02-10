import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner/>; 
    // Can be betterif we add a whole skeleton to this
  }

  if (error) {
    return null;
  }

  return (
    <List>
      {data &&
        data.map((gen: Genre) => (
          <ListItem key={gen.id} paddingY='5px'>
            <HStack>
              <Image boxSize={'32px'} borderRadius={8} src={getCroppedImage(gen.image_background)}></Image>
              {/* Here fixing the boxsize made it easier for us to give the skeletons a variable boxsize to render according to the actual cards */}
              <Text fontSize='lg'>{gen.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
