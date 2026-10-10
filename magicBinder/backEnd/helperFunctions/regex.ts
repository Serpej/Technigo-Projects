export const exactlyMatchedRegex = (str: string): RegExp => {
    const specialRegex = /[\\.*+?^${}()|[\]]/g;
    const regexedString = str.replace(specialRegex, "\\$&");
    const cardNameAsRegex = new RegExp("^" + regexedString + "$", "i");
    return cardNameAsRegex
}

export const startsWithRegex = (str: string): RegExp => {
    const specialRegex = /[\\.*+?{}()|[\]]/g;
    const regexedString = str.replace(specialRegex, "\\$&");
    const cardNameAsRegex = new RegExp("^" + regexedString + "$", "i");
    return cardNameAsRegex
}