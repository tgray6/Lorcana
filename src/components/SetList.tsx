import { Text, Flex } from "@chakra-ui/react";
import useSets from "../hooks/useSets";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function SetList() {
  const { set, error, isLoading } = useSets();

  const RenderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return set.map((set) => <Button key={set.Set_ID}>{set.Name}</Button>);
    }
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex flexWrap={"wrap"}>{RenderContent()}</Flex>
    </>
  );
}
