import { Car, Button, IconButton } from './interfaces/interfaces';

// Basics
// -- Everyday Types

// - - - implicit
// - - primitives
let name = 'John';

// - - explicit (optional for: string, number, boolean)
let surname: string = 'Smith';
let age: number = 24;
let hasCar: boolean = true;
let hasFriends: any = undefined;
// if variables hasnt strict data type, ot must use explicit and any type
hasFriends = true;

// arrays - - - - - - - - - - - - - - - -
let favoriteMovies: string[] = ['Home alone'];
favoriteMovies.push('Home alone 2 ');

let favoriteNumbers: number[] = [1, 4, 7];
favoriteNumbers.push(17);

let randomStuff: any[] = [1, true, 'Hello'];
// console.log('[favoriteMovies]', favoriteMovies);

// - - - tupples for arrays
let config: [boolean, number, string, string] = [true, 12, 'Hello', 'World'];
let settings: [boolean, string][] = [];
settings.push([true, 'Hello']);
// - - - - - - - - - - - - - - - - - - -  --
// - - - objects
// - - - - types
type User = {
  name: string;
  age: number;
  likesMovies?: boolean;
  hasDog?: boolean;
  hasCar?: boolean;
};

let user: User = {
  name: 'John',
  age: 25,
  likesMovies: true,
  hasCar: false,
};

//
type City = string;
let city: City = 'Kaunas';
// - - - - - - - - - - - - - -

let car: Car = {
  make: 'Audi',
  model: 'A6',
  year: 1998,
  madeInGermany: true,
  damaged: false,
};
// console.log('[Car]', car);
// -------------------------

let button: Button = {
  text: 'Click Me',
  action: () => console.log('Button clicked'),
};
//

let iconButton: IconButton = {
  text: 'Follow us on Facebook',
  action: () => console.log('Follow'),
  icon: 'fa fa-facebook',
};
// let iconButton: IconButton = {
//   ...button,
//   icon: 'fa fa-facebook',
// };
//
// console.log('iconButton', iconButton);
// console.log('----');
// - - - union (sets possible data types for variable)
let price: number | string = '15';
//----------------------------------------
// - - - functions
let sum = (a: number, b: number): number => a + b; // if () has no return => returns VOID
// console.log('[function numbers]', 1, 5);
/////////

interface Greeting {
  (a: string): string;
}

let greetingInGermany: Greeting = (name) => `Gutentag, ${name}`;
let greetingInSpanish: Greeting = (name) => `Olia, ${name}`;

// console.log(greetingInGermany('John'));
// console.log(greetingInSpanish('John'));
// ---------------

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
//--function + union------
let controller = (direction: Direction): void =>
  console.log(`User moves to ${direction}`);

console.log(controller('UP'));
// - - - - - - - - -
// - -Typescript + DOM
const rootDiv: HTMLElement = document.querySelector('#root') as HTMLElement;

const insertHelloWorld = (place: HTMLElement): void => {
  const p = document.createElement('p');
  p.innerText = 'Hello World';

  place.appendChild(p);
};

insertHelloWorld(rootDiv);

console.log(rootDiv);
