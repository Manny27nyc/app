import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'masternode',
  initialState: {
    masternodes: [],
    isMasternodesLoaded: false,
    isLoadingMasternodes: false,
    masternodesLoadError: '',
    isMasterNodeCreating: false,
    createdMasterNodeData: {},
    isErrorCreatingMasterNode: '',
  },
  reducers: {
    fetchMasternodesRequest(state) {
      state.masternodes = [];
      state.isLoadingMasternodes = true;
    },
    fetchMasternodesSuccess(state, action) {
      state.masternodes = action.payload.masternodes;
      state.isLoadingMasternodes = false;
      state.isMasternodesLoaded = true;
    },
    fetchMasternodesFailure(state, action) {
      state.masternodes = [];
      state.isLoadingMasternodes = false;
      state.isMasternodesLoaded = true;
    },
    createMasterNode(state, action) {
      state.isMasterNodeCreating = true;
      state.createdMasterNodeData = {};
      state.isErrorCreatingMasterNode = '';
    },
    createMasterNodeSuccess(state, action) {
      state.isMasterNodeCreating = false;
      state.createdMasterNodeData = action.payload;
      state.isErrorCreatingMasterNode = '';
    },
    createMasterNodeFailure(state, action) {
      state.isMasterNodeCreating = false;
      state.createdMasterNodeData = {};
      state.isErrorCreatingMasterNode = action.payload;
    },
  },
});

const { actions, reducer } = configSlice;

export const {
  fetchMasternodesRequest,
  fetchMasternodesSuccess,
  fetchMasternodesFailure,
  createMasterNode,
  createMasterNodeSuccess,
  createMasterNodeFailure,
} = actions;

export default reducer;
