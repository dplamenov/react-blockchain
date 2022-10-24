import { createSlice } from "@reduxjs/toolkit";

export const web3Slice = createSlice({
  name: "web3",
  initialState: {
    contracts: {},
  },
  reducers: {
    connect: (state, action) => {
      state.provider = action.payload.provider;
      state.signer = action.payload.signer;
      state.account = action.payload.account;
    },
    disconnect: (state) => {
      state.provider = undefined;
      state.signer = undefined;
      state.account = undefined;
    },
    loadContracts: (state, action) => {
      state.contracts = action.payload.contracts;
    },
  },
});

export const { connect, disconnect, loadContracts } = web3Slice.actions;
