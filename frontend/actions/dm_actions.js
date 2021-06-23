import * as DMAPIUtil from '../util/dm_api_util';

export const RECEIVE_USER_DMS = 'RECEIVE_USER_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DMS';
export const RECEIVE_DM_ERRORS = 'RECEIVE_DM_ERRORS';

export const receiveUserDMs = dms => {
  return({
    type: RECEIVE_USER_DMS,
    dms
  })
};

export const receiveDM = dm => {
  return({
    type: RECEIVE_DM,
    dm
  })
};

export const removeDM = dmId => {
  return({
    type: RECEIVE_DM,
    dmId
  })
};

export const receiveErrors = (errors) => {
  return({
    type: RECEIVE_DM_ERRORS,
    errors
  })
};

export const fetchUserDMs = userId => dispatch => {
  return DMAPIUtil.fetchUserDMs(userId)
    .then(dms => dispatch(receiveUserDMs(dms)))
};

export const fetchDM = dmId => dispatch => {
  return DMAPIUtil.fetchDM(dmId)
    .then(dm => dispatch(receiveDM(dm)))
};

export const createDM = otherUser => dispatch => {
  return DMAPIUtil.createDM(otherUser)
    .then(dm => dispatch(receiveDM(dm)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const deleteDM = dmId => dispatch => {
  return DMAPIUtil.deleteDM(dmId)
    .then(dm => dispatch(removeDM(dm.id)))
};