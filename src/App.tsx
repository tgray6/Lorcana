import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CardGrid from "./components/CardGrid";
import SetList from "./components/SetList";

export default function App() {
  return (
    <Grid
      templateAreas={{
        //these are like media queries, only shows some of these based on screen size. base is like mobile resolutions
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //wider than 1024 pixels
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
        >
          <SetList />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={"5px"}>
        <CardGrid />
      </GridItem>
    </Grid>
  );
}
