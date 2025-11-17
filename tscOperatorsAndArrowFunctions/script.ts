function getUSer(username: string): string {
  return `Welcome back ${username}`;
};

// Optional and default parameters


function createProduct(name: string, price: number, category?: string, inStock: boolean = true): void {
  console.log(`Product: ${name}, Price: €${price}, Category: ${category}, In Stock: ${inStock}`);
}; // The In Stock has a default as true. The category parameter can be a string or undefined.

// Rest Operator. This lmakes an array of parameters as a string, uýou can use one or many and perform array methods on them.

function logUserActivities(userId: string, ...activities: string[]): void {
  console.log(`User ${userId} performed the following activites:`);
  activities.forEach((activity, index) => {
    console.log(`${index + 1}. ${activity}`)
  });
};

console.log(logUserActivities("Jane Doe", "logged in", "updated profile", "purchased item", "saved item to favorites", "logged out"));

// Arrow functions and return types.

function doubleNumber(num: number): number {
  return num * 2;
};

const doubleNumberAgain = (num: number): number => {
 return num * 2;
};

let age = 30; //inferred to number. does not work with parameters.