import { Text, Flex } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import useSets from "../hooks/useSets";
import floodBornLogo from "../assets/floodbornLogo.webp";
import firstChapterLogo from "../assets/firstChapterLogo.webp";

export default function SetList() {
  const { data, error, isLoading } = useSets();

  const RenderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
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
