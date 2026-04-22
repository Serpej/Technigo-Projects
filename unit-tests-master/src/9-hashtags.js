export const hashtags = (text) => {
  const textToArray = text.split(" ");
  const filteredArray = textToArray.filter((word) => word.includes("#"));
  return filteredArray
}
