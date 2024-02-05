import { Box, HStack, Image } from "@chakra-ui/react";
import lorcanaLogo from "../assets/lorcanaLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack
      justifyContent={"space-between"}
      px={"10px"}
      borderBottom="4px solid #000"
    >
      {/* this first Box component is just so we have 3 things up top, so the space-between works, so Lorcana logo is centered and ColorModeSwitch is on the right */}
      <Box />
      <Image src={lorcanaLogo} position={"relative"} h={"125px"} p={2} />
      <ColorModeSwitch />
    </HStack>
  );
}
