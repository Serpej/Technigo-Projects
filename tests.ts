const cacheNum: Array<number> = [];

const modFib = (t1:number, t2:number, number: number): number => {
  if(number === 1) {
    return t1;
  } else if (number === 2) {
    return t2;
  }

  const newFib = modFib(t1,t2, (number - 2)) + modFib(t1,t2, (number - 1))**2;

  if (!(cacheNum.includes(newFib))) {
    cacheNum.push(newFib);
  }

  return newFib
}
modFib(3,4,10);

for(let num of cacheNum) {
  console.log(num);
}
