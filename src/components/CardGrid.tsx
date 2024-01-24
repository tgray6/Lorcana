import { Text, Flex } from "@chakra-ui/react";
import LorcanaCard from "./LorcanaCard";
import { Skeleton } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import useCards from "../hooks/useCards";
import { ISet, InkColor } from "../types/types";

interface Props {
  selectedSet: ISet | null;
  selectedInkColor: InkColor | null;
}

export default function CardGrid({ selectedSet, selectedInkColor }: Props) {
  const { data, error, isLoading } = useCards(selectedSet);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const filteredCards = data
    .filter(
      (card) => selectedSet === null || card.Set_ID.includes(selectedSet.Set_ID)
    )
    .filter(
      (card) =>
        selectedInkColor === null || card.Color.includes(selectedInkColor)
    );

  const RenderContent = () => {
    if (error) {
      return null;
    }

    if (isLoading) {
      return skeletons.map((skeleton) => (
        <CardContainer key={`skeleton-${skeleton}`}>
          <Skeleton
            startColor="pink.500"
            endColor="orange.500"
            height="475px"
            width="335px"
          />
        </CardContainer>
      ));
    } else {
      return filteredCards.map((card) => (
        <CardContainer key={card.Name}>
          <LorcanaCard card={card} />
        </CardContainer>
      ));
    }
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex flexWrap={"wrap"} alignItems="center" justifyContent="center">
        {RenderContent()}
      </Flex>
    </>
  );
}
