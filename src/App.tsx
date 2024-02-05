import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
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
    >
      <GridItem area={"nav"} bg={"#F6AD55"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          area={"aside"}
          bg={"gray"}
          maxWidth={"180px"}
          width={"180px"}
          h={"100%vh"}
          borderRight="4px solid #000"
        >
          <SetList onSelectSet={handleClick} />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={"5px"}>
        <HStack paddingLeft={3} marginBottom={1}>
          <InkColorSelector
            onSelectInkColor={handleInkColorFilterClick}
            inkColorSelected={selectedInkColor}
          />
        </HStack>
        <CardGrid
          selectedSet={selectedSet}
          selectedInkColor={selectedInkColor}
        />
      </GridItem>
    </Grid>
  );
}
