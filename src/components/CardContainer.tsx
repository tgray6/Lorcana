import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardContainer({ children }: Props) {
  return (
    <Card
      p={1.5}
      height={"450px"}
      width={"325px"}
      borderRadius={"1.2rem"}
      margin={1.5}
    >
      {children}
    </Card>
  );
}
