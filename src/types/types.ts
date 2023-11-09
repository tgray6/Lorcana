export interface Card {
  traits: string[];
  set: string;
  "lore-value": number;
  "card-number": number;
  color: string;
  strength: number;
  artist: string;
  willpower: number;
  type: string;
  subtypes: string[];
  "set-code": string;
  abilities: Record<string, string>;
  inkable: boolean;
  "body-text": string;
  subtitle: string;
  "image-urls": {
    small: string;
    "no-art": string;
    large: string;
    "art-crop": string;
    medium: string;
    foil: string;
  };
  name: string;
  "flavor-text": string;
  "ink-cost": number;
  rarity: string;
}
