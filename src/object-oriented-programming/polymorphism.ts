export class Animal {
  animalSound(): string {
    return 'The animal makes a sound';
  }
}

export class Pig extends Animal {
  animalSound() {
    return 'The pig says: Gâu Gâu';
  }
}

export class Dog extends Animal {
  // override animalSound() method
  animalSound() {
    return 'The dog says: Éc Éc';
  }
}

export class Chicken extends Animal {
  // overload animalSound() method
}

const dog = new Dog();
const pig = new Pig();
const chicken = new Chicken();

console.log(`Code example: '\n'`);

console.log(dog.animalSound());
console.log(pig.animalSound());
console.log(chicken.animalSound());

console.log('====Polymorphism Principle====');
