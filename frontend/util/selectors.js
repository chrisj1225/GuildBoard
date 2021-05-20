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
  const msgDate = new Date(date);
  const msgYear = msgDate.getFullYear();
  const msgMonth = (msgDate.getMonth() + 1);
  const msgDay = msgDate.getDate();
  const newDate = `${msgMonth}/${msgDay}/${msgYear}`; // "05/19/2021"
  
  let hr = msgDate.getHours();
  let min = msgDate.getMinutes();
  let AMPM = 'AM';

  if (hr > 12) {
    hr -= 12;
    AMPM = 'PM'
  } else if (hr == 0) {
    hr += 12;
  }
  if (min < 10) {
    min = "0" + min
  }
  const msgTime = `${hr}:${min} ${AMPM}`

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = (currDate.getMonth() + 1);
  const currDay = currDate.getDate();

  if ((currYear === msgYear) && 
    (currMonth === msgMonth) && 
    (currDay === msgDay)){
    return `Today at ${msgTime}`
  }

  if ((currYear === msgYear) && 
    (currMonth === msgMonth) && 
    (currDay === msgDay+1)){
    return `Yesterday at ${msgTime}`
  }

  return newDate;
}