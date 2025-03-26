interface Animal {
  name: String;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

interface Bird extends Animal {
  canFly: boolean;
}

interface Dog extends Bird {
  race: String;
  age: number;
}
