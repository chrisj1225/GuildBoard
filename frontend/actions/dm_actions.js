import * as DMAPIUtil from '../util/dm_api_util';

export const RECEIVE_USER_DMS = 'RECEIVE_USER_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DM';
export const RECEIVE_DM_ERRORS = 'RECEIVE_DM_ERRORS';

export const receiveUserDMs = dms => {
  return({
    type: RECEIVE_USER_DMS,
    dms
  })
};

export const receiveDM = data => {
  return({
    type: RECEIVE_DM,
    data
  })
};

export const removeDM = dmId => {
  return({
    type: REMOVE_DM,
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
    .then(data => dispatch(receiveDM(data)))
};

export const createDM = otherUserId => dispatch => {
  return DMAPIUtil.createDM(otherUserId)
    .then(data => dispatch(receiveDM(data)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const deleteDM = dmId => dispatch => {
  return DMAPIUtil.deleteDM(dmId)
    .then(data => dispatch(removeDM(data.dm.id)))
};