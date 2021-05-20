import { createSelector } from 'reselect';

// convert keys from camel to snake case
// import into Component
// before sending ajax request
// pass in state to convertToSnakeCase

export const convertToSnakeCase = obj => {
  const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  let newObj = {};
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let convertedKeys = keys.map(key => camelToSnakeCase(key));
  for(let i = 0; i < keys.length; i++) { newObj[convertedKeys[i]] = values[i] }
  return newObj;
}



export const findGenChanId = (server, channels) => {
  // debugger
  const genChans = channels.filter( channel => {
    return (channel.serverId == server.id) && (channel.title == "general")
  })
  // debugger
  return genChans[0].id;
}

export const findServerChans = (server, channels) => {
  return channels.filter( channel => channel.serverId == server.id )
} 

export const getChannelMessages = (state, channelId) => {
  const channelMessages = Object.values(state.entities.messages).filter(message => {
    return message.messageableId == channelId
  })
  return channelMessages;
}

export const convertDateString = (date) => {
  let splitDate = date.split("-");
  splitDate[2] = splitDate[2].slice(0,2); // ["2021", "05", "19"]
  let numSplitDate = splitDate.map(n => (parseInt(n))); // [2021, 5, 19]
  let newDate = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`; // "05/19/2021"
  const currDate = new Date();
  return newDate;

  // return newTimeStamp 
  "2021-05-19T14:46:18.695Z"
}