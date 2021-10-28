// Basics
// -- Everyday Types
// - - - implicit
// - - primitives
var name = 'John';
// - - explicit (optional for: string, number, boolean)
var surname = 'Smith';
var age = 24;
var hasCar = true;
var hasFriends = undefined;
// if variables hasnt strict data type, ot must use explicit and any type
hasFriends = true;
// arrays - - - - - - - - - - - - - - - -
var favoriteMovies = ['Home alone'];
favoriteMovies.push('Home alone 2 ');
var favoriteNumbers = [1, 4, 7];
favoriteNumbers.push(17);
var randomStuff = [1, true, 'Hello'];
// console.log('[favoriteMovies]', favoriteMovies);
// - - - tupples for arrays
var config = [true, 12, 'Hello', 'World'];
var settings = [];
settings.push([true, 'Hello']);
var user = {
    name: 'John',
    age: 25,
    likesMovies: true,
    hasCar: false,
};
var city = 'Kaunas';
// - - - - - - - - - - - - - -
var car = {
    make: 'Audi',
    model: 'A6',
    year: 1998,
    madeInGermany: true,
    damaged: false,
};
// console.log('[Car]', car);
// -------------------------
var button = {
    text: 'Click Me',
    action: function () { return console.log('Button clicked'); },
};
//
var iconButton = {
    text: 'Follow us on Facebook',
    action: function () { return console.log('Follow'); },
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
var price = '15';
//----------------------------------------
// - - - functions
var sum = function (a, b) { return a + b; }; // if () has no return => returns VOID
var greetingInGermany = function (name) { return "Gutentag, " + name; };
var greetingInSpanish = function (name) { return "Olia, " + name; };
//--function + union------
var controller = function (direction) {
    return console.log("User moves to " + direction);
};
console.log(controller('UP'));
// - - - - - - - - -
// - -Typescript + DOM
var rootDiv = document.querySelector('#root');
var insertHelloWorld = function (place) {
    var p = document.createElement('p');
    p.innerText = 'Hello World';
    place.appendChild(p);
};
insertHelloWorld(rootDiv);
console.log(rootDiv);
export {};
