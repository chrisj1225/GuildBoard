import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

export const receiveServers = servers => {
  return({
    type: RECEIVE_SERVERS,
    servers
  })
};

export const receiveServer = server => {
  return ({
    type: RECEIVE_SERVER,
    server
  })
};

export const removeServer = serverId => {
  return ({
    type: REMOVE_SERVER,
    serverId
  })
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SERVER_ERRORS,
    errors
  })
};

export const clearErrors = () => {
  return ({
    type: CLEAR_SERVER_ERRORS
  })
};

export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const fetchServer = (serverId) => dispatch => {
  return ServerAPIUtil.fetchServer(serverId)
    .then(server => dispatch(receiveServer(server)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const createServer = (server) => dispatch => {
  return ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const updateServer = (server) => dispatch => {
  return ServerAPIUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const deleteServer = (serverId) => dispatch => {
  return ServerAPIUtil.deleteServer(serverId)
    .then(() => dispatch(removeServer(serverId)),
    err => dispatch(receiveErrors(err.responseJSON)))
};