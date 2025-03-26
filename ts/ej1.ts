interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

type Bird = Animal & {
  canFly: boolean;
};

type Dog = Animal & {
  race: "Huskey" | "Labrador" | "Chucho";
  age: number;
};

type Cat = Pick<Animal, "name" | "canSleep"> & {
  color: string;
};

type Snake = Pick<Animal, "canEat" | "canDrink" | "canSleep">;

const perro: Dog = {
  name: "Dogo",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "Huskey",
  age: 4,
};

const cat: Cat = {
  name: "Ernesto",
  canSleep: true,
  color: "Negro",
};

const snake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};

console.log(perro);
console.log(cat);
console.log(snake);
