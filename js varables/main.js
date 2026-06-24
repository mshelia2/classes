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