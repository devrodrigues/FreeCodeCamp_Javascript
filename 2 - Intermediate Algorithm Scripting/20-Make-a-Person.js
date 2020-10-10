// Make a Person

/* Problem:
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument 
must accept only one argument and it has to be a string. These methods must be the only available 
means of interacting with the object.
*/

const Person = function (firstAndLast) {
  let names = firstAndLast.split(" ");
  let firstName = names[0];
  let lastName = names[1];

  this.setFirstName = function (name) {
    names[0] = name;
    firstName = names[0];
  };

  this.setLastName = function (name) {
    names[1] = name;
    lastName = names[1];
  };

  this.setFullName = function (firstAndLast) {
    names = firstAndLast.split(" ");
    firstName = names[0];
    lastName = names[1];
  };

  this.getFirstName = function () {
    firstName = names[0];
    return firstName;
  };

  this.getLastName = function () {
    lastName = names[1];
    return lastName;
  };

  this.getFullName = function () {
    return firstName + " " + lastName;
  };
};

var bob = new Person("Bob Ross");
console.log(bob);

console.log(Object.keys(bob).length);
console.log(Object.keys(bob));

console.log(bob instanceof Person);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName("Haskell");
console.log(bob.getFullName());

bob.setLastName("Curry");
console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

console.log(bob.firstName);
console.log(bob.lastName);

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solution:

/* 1)

var Person = function (firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

*/
