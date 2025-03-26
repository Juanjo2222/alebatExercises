//PRIMER CODIGO

const user1 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profession: "Barro man",
};

function userName({ name, last }) {
  const fullName = `Me llamo ${name} ${last}`;

  return fullName;
}

console.log(userName(user1));

//SEGUNDO CODIGO

const user2 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData({ name, last, salary }) {
  const annualSalary = salary * 12;
  const fullName = `${name} ${last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user2));

//TERCER CÓDIGO

const user3 = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function isForeign({ age, nationality }) {
  if (nationality !== "España" || age !== "30") {
    return "No es apto para la ayuda del gobierno";
  }

  return "Apto para la ayuda del gobierno";
}

console.log(isForeign(user3));
