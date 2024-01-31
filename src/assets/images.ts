import sapphire from "./blue.svg";
import ruby from "./red.svg";
import amber from "./yellow.svg";
import emerald from "./green.svg";
import amethyst from "./purple.svg";
import steel from "./steel.svg";

import { InkColor } from "../types/types";

export { sapphire, ruby, amber, emerald, amethyst, steel };

export const renderSelectedInkColor = (selectedInkColor: InkColor) => {
  switch (selectedInkColor) {
    case "Ruby": {
      return ruby;
    }
    case "Emerald": {
      return emerald;
    }
    case "Sapphire": {
      return sapphire;
    }
    case "Steel": {
      return steel;
    }
    case "Amber": {
      return amber;
    }
    case "Amethyst": {
      return amethyst;
    }
    case null: {
      return;
    }
  }
};
