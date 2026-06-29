// Assignment //

const myPet = {
  name: "Bingo",
  type: "Dog",
  hunger: 50,
  happiness: 50,

  feed: function () {
    this.hunger -= 10;
    this.happiness += 5;
    console.log(`You fed ${this.name}!`);
  },

  play: function () {
    this.happiness += 15;
    this.hunger += 5;
    console.log(`${this.name} loves playing!`);
  }
};

myPet.feed();
myPet.play();
console.log(myPet);


// ternary operators //
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// relational operators //
let person = {
  name: "John",
  age: 25
};

console.log("name" in person);

// nullish coasilating //
let username = null;

console.log(username ?? "Guest");

// type operators //
typeof "Hello";
typeof 10;
typeof true;