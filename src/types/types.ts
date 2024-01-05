export interface ICard {
  Artist: string;
  Set_Name: string;
  Set_Num: number;
  Color: string;
  Image: string;
  Cost: number;
  Inkable: boolean;
  Name: string;
  Type: string;
  Rarity: string;
  Flavor_Text: string;
  Card_Num: number;
  Body_Text: string;
  Set_ID: string;
}

export interface ISet {
  Set_Num: number;
  Release_Date: Date;
  Cards: number;
  Name: string;
  Set_ID: string;
}
