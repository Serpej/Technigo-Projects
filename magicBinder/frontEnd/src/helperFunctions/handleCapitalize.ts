export const capitalize = (word:string):string => {
  const firstCha = word[0].toLocaleUpperCase();
  const restOfWord = word.slice(1);
  const capitalized = firstCha + restOfWord;
  return capitalized

}
