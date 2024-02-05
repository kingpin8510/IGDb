import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack margin={'10px'}>
      {platforms.map((ptfm) =>
        ptfm.slug && iconMap[ptfm.slug] ? (
          <Icon key={ptfm.id} as={iconMap[ptfm.slug]} color='gray.500' />
        ) : null
      )}
      {/* {platforms.map((ptfm) => (
        <Icon as={iconMap[ptfm.slug]}></Icon>
      ))} */}
      {/* {platforms &&
        Array.isArray(platforms) &&
        platforms.length > 0 &&
        platforms.map((platform) => <Text>{platform.name}</Text>)}
      {platforms.map((platform) => <Text>{platform.name}</Text>)} */}
    </HStack>
  );
};

export default PlatformIcons;
