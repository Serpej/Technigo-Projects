export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === '' ? true : false;
  } else if (type === 'array') {
    return stringArrayOrObject.length === 0 ? true : false;
  } else if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0 ? true : false;
  }

  return false
}
