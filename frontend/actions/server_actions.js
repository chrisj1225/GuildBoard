import * as ServerAPIUtil from '../util/server_api_util';
import * as MemberApiUtil from '../util/membership_api_util';

export const RECEIVE_USER_SERVERS = 'RECEIVE_USER_SERVERS';
export const RECEIVE_USER_SERVER = 'RECEIVE_USER_SERVER';
export const REMOVE_USER_SERVER = 'REMOVE_USER_SERVER';
export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REPLACE_SERVER = 'REPLACE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVERS_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

export const RECEIVE_SERVER_INFO = 'RECEIVE_SERVER_INFO';
export const RECEIVE_SERVER_MEMBERS = 'RECEIVE_SERVER_MEMBERS';

export const receiveUserServers = servers => {
  return({
    type: RECEIVE_USER_SERVERS,
    servers
  })
};

export const receiveUserServer = serverInfo => {
  return ({
    type: RECEIVE_USER_SERVER,
    serverInfo
  })
};

export const removeUserServer = serverInfo => {
  return ({
    type: REMOVE_USER_SERVER,
    serverInfo
  })
};

export const receiveAllServers = servers => {
  return({
    type: RECEIVE_ALL_SERVERS,
    servers
  })
};

export const receiveServer = serverInfo => {
  return ({
    type: RECEIVE_SERVER,
    serverInfo
  })
};

export const replaceServer = serverInfo => {
  return ({
    type: REPLACE_SERVER,
    serverInfo
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

export const receiveServerInfo = (info) => {
  return ({
    type: RECEIVE_SERVER_INFO,
    info
  })
}

// call when switching servers. pulls all server data and should hit 
// all relevant entities subreducers
export const fetchServerInfo = (serverId) => dispatch => {
  return ServerAPIUtil.fetchServer(serverId)
  .then(info => dispatch(receiveServerInfo(info)))
}

export const fetchAllServers = (userId) => dispatch => {
  dispatch(fetchServers());
  dispatch(fetchUserServers(userId));
}

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
    .then(server => dispatch(receiveUserServer(server)))
}

export const removeServerMember = (membershipId) => dispatch => {
  return MemberApiUtil.removeServerMember(membershipId)
    .then(server => dispatch(removeUserServer(server)))
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
    .then(server => dispatch(replaceServer(server)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const deleteServer = (serverId) => dispatch => {
  return ServerAPIUtil.deleteServer(serverId)
    .then(() => dispatch(removeServer(serverId)),
    err => dispatch(receiveErrors(err.responseJSON)))
};