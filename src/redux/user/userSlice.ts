import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  WalletEnum,
  UserDataType,
  InventoryItemType,
  TemplateType,
  BalanceType,
} from '../../types/index';

export interface UserState {
  isLoggedIn: boolean;
  userData: UserDataType;
  stakedList: Array<InventoryItemType>;
  unStakedList: Array<InventoryItemType>;
  templates: Array<TemplateType>;
  userBalance: BalanceType;
  gameBalance: BalanceType;
  membership: {
    isMember: boolean;
  } | null;
  discounts: {
    mineBonus: number;
    breakResist: number;
  };
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: {
    loginType: WalletEnum.wax,
    accountName: '',
    anchorSession: {},
    waxSession: {},
    selectedNodeURL: '',
  },
  stakedList: [],
  unStakedList: [],
  templates: [],
  userBalance: {
    wood: 0,
    iron: 0,
    gold: 0,
  },
  gameBalance: {
    wood: 0,
    iron: 0,
    gold: 0,
  },
  membership: null,
  discounts: {
    mineBonus: 0,
    breakResist: 0,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<any>) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    setUserBalance: (state: UserState, action: PayloadAction<BalanceType>) => {
      state.userBalance = action.payload;
    },
    setGameBalance: (state: UserState, action: PayloadAction<BalanceType>) => {
      state.gameBalance = action.payload;
    },
    setStakedList: (state: UserState, action: PayloadAction<any>) => {
      state.stakedList = action.payload;
    },
    setUnStakedList: (state: UserState, action: PayloadAction<any>) => {
      state.unStakedList = action.payload;
    },
    setTemplates: (state: UserState, action: PayloadAction<any>) => {
      state.templates = action.payload;
    },
    changeUserMembership: (
      state: UserState,
      action: PayloadAction<{
        isMember: boolean;
      } | null>
    ) => {
      state.membership = action.payload;
    },
    updateUserDiscounts: (
      state: UserState,
      action: PayloadAction<{
        mineBonus: number;
        breakResist: number;
      }>
    ) => {
      state.discounts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserData,
  setUserBalance,
  setGameBalance,
  setStakedList,
  setUnStakedList,
  setTemplates,
  changeUserMembership,
  updateUserDiscounts,
} = userSlice.actions;

export default userSlice.reducer;
