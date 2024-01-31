import { Flex, Spinner } from "@chakra-ui/react";
import useSets from "../hooks/useSets";
import { ISet } from "../types/types";
import { useState } from "react";
import SetButton from "./SetButton";

interface Props {
  onSelectSet: (set: ISet) => void;
}

export default function SetList({ onSelectSet }: Props) {
  const { data, error, isLoading } = useSets();
  //set TFC as default because it is the Set_ID for the cards we fetch on initial load
  const [activeButton, setActiveButton] = useState<string | null>("TFC");

  const handleSetButtonClick = (set: ISet) => {
    //checks if the Set_ID of the clicked button is equal to the current active button. If they are equal, it keeps the state unchanged (currentActive). Otherwise, it sets the state to the Set_ID of the clicked button.
    setActiveButton(set.Set_ID === activeButton ? activeButton : set.Set_ID);

    // Call onSelectSet to handle other actions
    onSelectSet(set);
  };

  const RenderContent = () => {
    if (error) {
      return null;
    }

    if (isLoading) {
      return (
        <Flex
          py={10}
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="flex-start" // Set alignItems to "flex-start" for top alignment
          position={"relative"}
        >
          <Spinner
            thickness="8px"
            speed="0.65s"
            emptyColor="purple.200"
            color="white.500"
            size="xl"
          />
        </Flex>
      );
    } else {
      return data.map((set) => (
        <SetButton
          key={set.Set_ID}
          onSelectSet={() => {
            onSelectSet(set);
            handleSetButtonClick(set);
          }}
          set={set}
          active={activeButton === set.Set_ID}
        />
      ));
    }
  };

  return (
    <>
      <Flex flexWrap={"wrap"}>{RenderContent()}</Flex>
    </>
  );
}
