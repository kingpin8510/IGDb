import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const genreSkel = () => {
  return (
    <Card>
      <Skeleton height={"20px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default genreSkel;


//Trash --- Nothing worked but is a skeleton format