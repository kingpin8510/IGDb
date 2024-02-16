import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";

//This platform making method will have the basic way to do things in react.

interface Props{
    onSelectPlatform: (platform : platform) => void;
    selectedPlatform: platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data &&
          data.map((platform) => (
            <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
