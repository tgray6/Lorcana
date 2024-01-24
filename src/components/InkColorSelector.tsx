import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
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

export default function InkColorSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Filter
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={amber}
            alt="amber"
            mr="12px"
          />
          <span>Amber</span>
        </MenuItem>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={amethyst}
            alt="amethyst"
            mr="12px"
          />
          <span>Amethyst</span>
        </MenuItem>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={emerald}
            alt="emerald"
            mr="12px"
          />
          <span>Emerald</span>
        </MenuItem>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={ruby}
            alt="ruby"
            mr="12px"
          />
          <span>Ruby</span>
        </MenuItem>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={sapphire}
            alt="sapphire"
            mr="12px"
          />
          <span>Sapphire</span>
        </MenuItem>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={steel}
            alt="steel"
            mr="12px"
          />
          <span>Steel</span>
        </MenuItem>
        <MenuItem as={Button} rightIcon={<RxReset />}>
          Reset Filters
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
