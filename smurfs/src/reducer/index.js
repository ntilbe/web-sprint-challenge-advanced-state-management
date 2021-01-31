import {
    SET_NETWORK_ERROR,
    ADD_SMURF,
    PAGE_LOADING,
    PAGE_LOADING_FINISHED,
    REMOVE_ALL_SMURFS,
    CLEAR_NETWORK_ERROR,
    SELECT_SMURF_BY_ID,
  } from "../actions";
  
  const initialState = {
    smurfs: [],
    pageIsLoading: false,
    networkErrorMessage: "",
    selectedSmurfId: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case PAGE_LOADING:
        return { ...state, pageIsLoading: true };
  
      case PAGE_LOADING_FINISHED:
        return { ...state, pageIsLoading: false };
  
      case SET_NETWORK_ERROR:
        return { ...state, networkErrorMessage: action.payload };
  
      case CLEAR_NETWORK_ERROR:
        return { ...state, networkErrorMessage: "" };
  
      case ADD_SMURF:
        return { ...state, smurfs: [...state.smurfs, action.payload] };
  
      case REMOVE_ALL_SMURFS:
        return { ...state, smurfs: [] };
  
      case SELECT_SMURF_BY_ID:
        return { ...state, selectedSmurfId: action.payload };
  
      default:
        return state;
    }
  }