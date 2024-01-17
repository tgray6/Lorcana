import { Text, Flex, Spinner } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import useSets from "../hooks/useSets";
import floodBornLogo from "../assets/floodbornLogo.webp";
import firstChapterLogo from "../assets/firstChapterLogo.webp";

export default function SetList() {
  const { data, error, isLoading } = useSets();

  const RenderContent = () => {
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
        <Button
          key={set.Set_ID}
          width="100%"
          py={12}
          // bg={set.Set_ID === "TFC" ? "purple" : "black"}
          bgImage={
            set.Set_ID === "TFC"
              ? firstChapterLogo
              : set.Set_ID === "RFB"
              ? floodBornLogo
              : "New Expansion, No Image, Update Frontend"
          }
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"100%"}
          bgColor={"transparent"}
          m={2}
          _hover={{
            // Add styles that should be maintained while the button is being hovered
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
          _active={{
            // Add styles that should be maintained while the button is being clicked
            opacity: 0.5,
          }}
          onClick={() => console.log("waaat")}
        />
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
