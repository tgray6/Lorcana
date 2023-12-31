import { Text, Flex } from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import LorcanaCard from "./LorcanaCard";
import { Skeleton } from "@chakra-ui/react";
import CardContainer from "./CardContainer";

export default function CardGrid() {
  const { cards, error, isLoading } = useCards();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const RenderContent = () => {
    if (isLoading) {
      return skeletons.map((skeleton) => (
        <CardContainer key={`skeleton-${skeleton}`}>
          <Skeleton
            startColor="pink.500"
            endColor="orange.500"
            height="475px"
            width="350px"
          />
        </CardContainer>
      ));
    } else {
      return cards.map((card) => (
        <CardContainer key={card.Name}>
          <LorcanaCard card={card} />
        </CardContainer>
      ));
    }
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex flexWrap={"wrap"}>{RenderContent()}</Flex>
    </>
  );
}
