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
