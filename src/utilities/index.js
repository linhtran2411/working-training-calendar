// get next character of a character
export const getNextCharacter = (character) =>
  String.fromCharCode(character.charCodeAt(0) + 1);

// generate an id
export const generateId = () => Number(new Date()).toString();
