export const hackerSpeak = (words) => {
  const hackerSpeakWords = words.replaceAll(/[aA]/gm, "4").replaceAll(/[eE]/gm, "3").replaceAll(/[iI]/gm, "1").replaceAll(/[oO]/gm, "0").replaceAll(/[sS]/gm, "5");
  return hackerSpeakWords;
}
