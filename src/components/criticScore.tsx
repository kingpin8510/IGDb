import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge fontSize="14px" padding={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
