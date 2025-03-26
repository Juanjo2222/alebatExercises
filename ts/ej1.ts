interface Animal {
  name: String;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

type Bird = Animal & {
  canFly: boolean;
};

type Dog = Animal & {
  race: String;
  age: number;
};

const perro: Dog = {
  name: "Dogo",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "Huskey",
  age: 4,
};
