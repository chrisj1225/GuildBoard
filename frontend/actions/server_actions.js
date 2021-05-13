import * as ServerAPIUtil from '../util/server_api_util';
import * as MemberApiUtil from '../util/membership_api_util';

export const RECEIVE_USER_SERVERS = 'RECEIVE_USER_SERVERS';
export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

export const RECEIVE_SERVER_MEMBERS = 'RECEIVE_SERVER_MEMBERS';

export const receiveUserServers = servers => {
  return({
    type: RECEIVE_USER_SERVERS,
    servers
  })
};

export const receiveAllServers = servers => {
  return({
    type: RECEIVE_ALL_SERVERS,
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

export const receiveServerMembers = (members) => {
  return ({
    type: RECEIVE_SERVER_MEMBERS,
    members
  })
};

export const fetchUserServers = (userId) => dispatch => {
  return ServerAPIUtil.fetchUserServers(userId)
    .then(servers => dispatch(receiveUserServers(servers)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const fetchServerMembers = (serverId) => dispatch => {
  return ServerAPIUtil.fetchServerMembers(serverId)
    .then(members => dispatch(receiveServerMembers(members)))
};

export const addServerMember = (member_params) => dispatch => {
  return MemberApiUtil.addServerMember(member_params)
    .then(server => dispatch(receiveServer(server)))
}

export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers()
    .then(servers => dispatch(receiveAllServers(servers)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const fetchServer = (serverId) => dispatch => {
  return ServerAPIUtil.fetchServer(serverId)
    .then(server => dispatch(receiveServer(server)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const createServer = (server) => dispatch => {
  // debugger
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