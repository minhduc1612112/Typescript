let apples: number = 5;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let muNumber: number[] = [1,2,3,4];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: {x: number; y: number;} = {
  x: 20,
  y: 10
};

// Function
const logNumber: (i:number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1) Function that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number;} = JSON.parse(json);

// 2) when we declare a variable on one line
// and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i< words.length; i++) {
  if(words[i] === 'red'){
    foundWord = true;
  }
}

// 3) Variable whose type cannnot be inferred correctly
let numbers = [10, -4, -1];
let numberAboveZero: boolean | number = false;

for(let i = 0; i<numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}