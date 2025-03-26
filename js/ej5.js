const user = {
  name: "Jorge",
  last: "Hernandez",
  age: 20,
};

const user2 = {
  name: "Roberto David",
  last: "Adam",
  age: 20,
};

const animals = ["fox", "cat", "frog"];

function findAnimal(animalParam) {
  animals.forEach((animalFromList) => {
    if (animalFromList === animalParam) {
      console.log(animalParam);
    }
  });
}

const color = "white";

const myMap = new Map();

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal("frog"));
myMap.set("color", color);
