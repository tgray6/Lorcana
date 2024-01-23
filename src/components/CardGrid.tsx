import { Text, Flex } from "@chakra-ui/react";
import LorcanaCard from "./LorcanaCard";
import { Skeleton } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import useCards from "../hooks/useCards";
import { ISet } from "../types/types";

interface Props {
  selectedSet: ISet | null;
}

export default function CardGrid({ selectedSet }: Props) {
  const { data, error, isLoading } = useCards(selectedSet);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // cleaned up my if null return data else data.filter function to this. null will return whatever the default api returns, the filter will filter based on the set button clicked
  const filteredCardsBySet = data.filter(
    (card) => selectedSet === null || card.Set_ID.includes(selectedSet.Set_ID)
  );

  const RenderContent = () => {
    console.log(data);
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
      return filteredCardsBySet.map((card) => (
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
