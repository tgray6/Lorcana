import { Grid, GridItem, Show, Flex, Input } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CardGrid from "./components/CardGrid";
import SetList from "./components/SetList";
import { useState } from "react";
import { ISet } from "./types/types";
import InkColorSelector from "./components/InkColorSelector";
import { InkColor } from "./types/types";

export default function App() {
  const [selectedSet, setSelectedSet] = useState<ISet | null>(null);
  const [selectedInkColor, setSelectedInkColor] = useState<InkColor | null>(
    null
  );

  const [searchedCard, setSearchedCard] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCard(e.target.value);
  };

  const handleClick = (set: ISet): void => {
    setSelectedSet(set);
  };

  const handleInkColorFilterClick = (color: InkColor): void => {
    setSelectedInkColor(color);
  };

  return (
    <Grid
      templateAreas={{
        //these are like media queries, only shows some of these based on screen size. base is like mobile resolutions
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //wider than 1024 pixels
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      height="100%vh"
    >
      <GridItem area={"nav"} bg={"#F6AD55"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          area={"aside"}
          bg={"gray"}
          borderRight="4px solid #000"
          position="sticky" // Use sticky for relative positioning
          top={0}
          height="100vh" // Set the height to 100% of the viewport
        >
          <SetList onSelectSet={handleClick} />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={"5px"}>
        <Flex
          paddingLeft={3}
          marginBottom={1}
          position="sticky" // Use sticky for relative positioning
          top={0}
          zIndex={1}
        >
          <InkColorSelector
            onSelectInkColor={handleInkColorFilterClick}
            inkColorSelected={selectedInkColor}
          />
          <Input
            type="text"
            value={searchedCard}
            onChange={handleInputChange}
            width={"300px"}
            border={"2px solid black"}
            marginLeft={1}
            placeholder="Search cards..."
            _placeholder={{ fontWeight: "bold", color: "white" }}
            backgroundColor={"gray"}
            color={"white"}
          />
        </Flex>
        <CardGrid
          selectedSet={selectedSet}
          selectedInkColor={selectedInkColor}
          searchedCard={searchedCard}
        />
      </GridItem>
    </Grid>
  );
}
