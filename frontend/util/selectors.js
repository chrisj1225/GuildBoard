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