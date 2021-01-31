import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const PAGE_LOADING = "PAGE_LOADING";
export const PAGE_LOADING_FINISHED = "PAGE_LOADING_FINISHED";
export const SET_NETWORK_ERROR = "SET_NETWORK_ERROR";
export const REMOVE_ALL_SMURFS = "REMOVE_ALL_SMURFS";
export const CLEAR_NETWORK_ERROR = "CLEAR_NETWORK_ERROR";
export const SELECT_SMURF_BY_ID = "SELECT_SMURF_BY_ID";

function returnAction(type, payload, cb) {
  const toReturn = {
    type: type,
    payload: payload,
  };
  if (cb) {
    cb(toReturn);
  } else {
    return toReturn;
  }
}

export const getSmurfs = () => (dispatch) => {
  returnAction(PAGE_LOADING, null, dispatch);
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      returnAction(PAGE_LOADING_FINISHED, null, dispatch);
      res.data.forEach((smurf) => {
        returnAction(ADD_SMURF, smurf, dispatch);
      });
    })
    .catch((err) => {
      returnAction(PAGE_LOADING_FINISHED, null, dispatch);
      returnAction(SET_NETWORK_ERROR, err.message, dispatch);
    });
};

export const addSmurf = (smurfData) => (dispatch) => {
  returnAction(PAGE_LOADING, null, dispatch);
  axios
    .post("http://localhost:3333/smurfs", smurfData)
    .then((res) => {
      returnAction(PAGE_LOADING_FINISHED, null, dispatch);
      returnAction(REMOVE_ALL_SMURFS, null, dispatch);
      res.data.forEach((smurf) => {
        returnAction(ADD_SMURF, smurf, dispatch);
      });
    })
    .catch((err) => {
      returnAction(PAGE_LOADING_FINISHED, null, dispatch);
      returnAction(SET_NETWORK_ERROR, err.message, dispatch);
    });
};

export const selectSmurf = (id) => (dispatch) => {
  returnAction(SELECT_SMURF_BY_ID, id, dispatch);
};