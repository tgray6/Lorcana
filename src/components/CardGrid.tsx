import { Text, Box, Image, Flex } from "@chakra-ui/react";
import useCards from "../hooks/useCards";

export default function CardGrid() {
    const { cards, error } = useCards();

    return (
        <>
            {error && <Text>{error}</Text>}

            <Flex flexWrap={"wrap"}>
                {cards.map((card) => (
                    <Box key={card["card-number"]} p={2} height={"475px"} width={"350px"} position="relative">
                        <Image src={card["image-urls"].large} alt={card["name"]} borderRadius='1.2rem' />
                    </Box>
                ))}
            </Flex>
        </>
    );
}
