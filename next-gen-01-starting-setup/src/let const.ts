// Code goes here!
const userNme = 'Zander';

// let age = 27;

// age = 26;

// function add(a:number, b:number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld)
// console.log(result)


/* when you have one expression you omitt the curly braces {} */
// const add = (a: number, b: number) => a + b;

// console.log(add(2, 5))

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(1, 2))

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies)

const person = {
  fname: 'zander',
  age: 27
};

const copiedPerson = { ...person };

// rest parameters
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0)
};

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { fname: userName, age } = person;

console.log(userName, age, person)