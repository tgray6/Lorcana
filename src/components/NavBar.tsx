import { HStack, Image } from "@chakra-ui/react";
import steel from "../assets/steel.svg";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
    return (
        <HStack justifyContent={'space-between'} padding={"10px"}>
            <Image src={steel} boxSize={"80px"} />
            <p>NavBar</p>
            <ColorModeSwitch />
        </HStack>
    );
}
