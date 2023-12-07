import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardContainer({ children }: Props) {
  return (
    <Card p={2} height={"475px"} width={"350px"} borderRadius={"1.2rem"}>
      {children}
    </Card>
  );
}
