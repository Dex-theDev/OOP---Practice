let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
}
// The best functions are those with no parameters!

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log('draw')
    }
}
circle.draw()

//Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}
const circle2 = createCircle(1)

//Constructor Function
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1)

const Circle1 = new Function('radius',` this.radius = radius
this.draw = function(){
    console.log('draw')
} `)

const circle3 = new Circle1(1)

// JS-Way Exercises

/*Complete the following program to add the definition of the Dog class.

    Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

*/
// TODO: define the Dog class here
class Dog {
    constructor(name,species,size){
        this.name = name
        this.species = species
        this.size = size
    }
    bark(){
        if(this.size > 60){
            return "Grrr! Grrr!"
        } 
        return "Woof! Woof!"
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

/*
Character inventory

Improve the example RPG to add character inventory management according to the following rules:

    A character's inventory contains a number of gold and a number of keys.

    Each character begins with 10 gold and 1 key.

    The character description must show the inventory state.

    When a character slays another character, the victim's inventory goes to its vanquisher.



*/
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.numOfGold = 10 // Each character begins with 10 gold
      this.numOfKeys = 1 // Each character begins with 1 key
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          const bonusGold = target.numOfGold
          const bonusKeys = target.numOfKeys
          target.numOfGold = 0
          target.numOfKeys = 0
          console.log(
            `${this
              .name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold}gold and ${bonusKeys} key(s)`
          );
          this.xp += bonusXP;
          this.numOfGold += bonusGold
          this.numOfKeys += bonusKeys
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.numOfGold}gold and ${this.numOfKeys} key(s)`;
    }
  }
  const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

/*
Account list

Let's build upon a previous account object exercise. A bank account is still defined by:

    A name property.
    A balance property, initially set to 0.
    A credit method adding the value passed as an argument to the account balance.
    A describe method returning the account description.

Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

*/
class Account {
    constructor(name){
        this.name = name
        this.balance = 0
    }
    credit(amt){
        return this.balance += amt
    }
    describe(){
       console.log(`owner: ${this.name}, balance: ${this.balance}`)
    }
}
const seanAccount = new Account('Sean')
const bradAccount = new Account('Brad')
const georgesAccount = new Account('Georges')

seanAccount.credit(1000)
bradAccount.credit(1000)
georgesAccount.credit(1000)

console.log(seanAccount.describe())
console.log(bradAccount.describe())
console.log(georgesAccount.describe())