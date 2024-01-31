import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  HStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { RxReset } from "react-icons/rx";
import {
  sapphire,
  ruby,
  amber,
  emerald,
  amethyst,
  steel,
} from "../assets/images";
import { renderSelectedInkColor } from "../assets/images";

import { InkColor } from "../types/types";

interface Props {
  onSelectInkColor: (color: InkColor) => void;
  inkColorSelected: InkColor | null;
}

export default function InkColorSelector({
  onSelectInkColor,
  inkColorSelected,
}: Props) {
  const handleInkButtonClick = (color: InkColor) => {
    // Call onSelectSet to handle other actions
    onSelectInkColor(color);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} width={"200px"}>
        {inkColorSelected ? (
          <HStack>
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={renderSelectedInkColor(inkColorSelected)}
              alt="amber"
              mr="12px"
            />
            <span>{inkColorSelected}</span>
          </HStack>
        ) : (
          "Filter By Ink Color"
        )}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleInkButtonClick("Amber")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={amber}
            alt="amber"
            mr="12px"
          />
          <span>Amber</span>
        </MenuItem>
        <MenuItem onClick={() => handleInkButtonClick("Amethyst")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={amethyst}
            alt="amethyst"
            mr="12px"
          />
          <span>Amethyst</span>
        </MenuItem>
        <MenuItem onClick={() => handleInkButtonClick("Emerald")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={emerald}
            alt="emerald"
            mr="12px"
          />
          <span>Emerald</span>
        </MenuItem>
        <MenuItem onClick={() => handleInkButtonClick("Ruby")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={ruby}
            alt="ruby"
            mr="12px"
          />
          <span>Ruby</span>
        </MenuItem>
        <MenuItem onClick={() => handleInkButtonClick("Sapphire")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={sapphire}
            alt="sapphire"
            mr="12px"
          />
          <span>Sapphire</span>
        </MenuItem>
        <MenuItem onClick={() => handleInkButtonClick("Steel")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={steel}
            alt="steel"
            mr="12px"
          />
          <span>Steel</span>
        </MenuItem>
        <MenuItem
          onClick={() => handleInkButtonClick(null)}
          as={Button}
          rightIcon={<RxReset />}
        >
          Reset Filter
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
