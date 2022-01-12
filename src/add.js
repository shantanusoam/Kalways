const number = [1,3,4,11,1,2,32,9];
const index = number.indexOf(2);
const lol = [number.slice(0,index)];
const add = [...number.slice(0,index),4,...number.slice(index)];

const remove = number.filter(n=> n !== 2);
number.map(n=>n === 2 ? 20 :n);
console.log(remove);