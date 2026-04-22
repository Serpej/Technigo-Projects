export const firstLast = (items) => {
  if (items.length < 1) {
    return "No items!";
  } else if(items.length === 1) {
    return "Only item: bob";
  } else if(items.length > 2) {
    const lastItem = items.length - 1;
    return `First: ${items[0]}, Last: ${items[lastItem]}`;
  } else {
    return `First: ${items[0]}, Last: ${items[1]}`;
  }

}
