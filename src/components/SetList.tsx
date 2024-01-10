import { Text, Flex, Spacer } from "@chakra-ui/react";
import useSets from "../hooks/useSets";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";

export default function SetList() {
  const { set, error, isLoading } = useSets();

  const RenderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return set.map((set) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py={12}
          bg={set.Set_ID === "TFC" ? "purple" : "black"}
          // bgImage="url('https://bit.ly/2Z4KKcF')"
          // bgPosition="center"
          // bgRepeat="no-repeat"
          position="relative"
          mb={2}
        >
          {" "}
          <Button h={"100%"} w={"100%"} position="absolute" key={set.Set_ID}>
            {set.Name}
          </Button>
        </Box>
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
