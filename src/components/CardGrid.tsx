import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Card } from "../types/types";
import { Text, Box, Image, Flex } from "@chakra-ui/react";

export default function CardGrid() {
    const [cards, setCards] = useState<Card[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get<Card[]>("/")
            .then(res => {
                setCards(Object.values(res.data));
                // console.log(Object.values(res.data)[0]["card-number"]);
            })
            .catch(err => {
                setError(err.message);
                console.log(err);
            });
    }, []);

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
