import { Button } from "@chakra-ui/react";
import floodBornLogo from "../assets/floodbornLogo.webp";
import firstChapterLogo from "../assets/firstChapterLogo.webp";
import { ISet } from "../types/types";

interface Props {
  onSelectSet: (set: ISet) => void;
  set: ISet;
  active: boolean;
}

export default function SetButton({ onSelectSet, set, active }: Props) {
  return (
    <Button
      key={set.Set_ID}
      width="100%"
      py={12}
      border={active ? "2px" : ""}
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
        boxShadow: "0 0 10px rgba(0, 0, 0, 1)",
      }}
      _active={{
        // Add styles that should be maintained while the button is being clicked
        opacity: 0.5,
      }}
      onClick={() => {
        onSelectSet(set);
      }}
    />
  );
}
