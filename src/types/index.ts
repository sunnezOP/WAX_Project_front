export const GameAccount = 'test';

export enum WalletEnum {
  wax = 'wax',
  anchor = 'anchor',
}

export type UserDataType = {
  loginType: WalletEnum;
  accountName: string;
  anchorSession: any;
  waxSession: any;
  selectedNodeURL: string;
};

export type BalanceType = {
  [key in BalanceEnum]: number;
};

export type ToolConfig = {
  repair_cost: BalanceType;
  rewards: BalanceType;
  template_name: string;
  type: string;
};

export enum BalanceEnum {
  wood = 'wood',
  iron = 'iron',
  gold = 'gold',
}

export type InventoryItemType = {
  selected: boolean;
  id: string;
  template_id: string;
  durability: number;
  nextMine: Date;
  mineable: boolean;
  type?: string;
};

export type TemplateType = {
  template_id: string;
  template_name: string;
  type: string;
  imgLink: string;
  rarity: string;
  charged_time: number;
  durability_consume: string;
  craftCost: BalanceType;
  init_durability: number;
  repair_cost: BalanceType;
  rewards: BalanceType;
};
