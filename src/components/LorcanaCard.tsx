import { Image } from "@chakra-ui/react";
import { ICard } from "../types/types";

interface Props {
  card: ICard;
}

export default function LorcanaCard({ card }: Props) {
  return <Image src={card.Image} alt={card.Name} borderRadius="1.2rem" />;
}
