// Comparaciones con booleanos
console.log(false + false); // 0 + 0 = 0
console.log(false + true); // 0 + 1 = 1
console.log(true + true); // 1 + 1 = 2

// Comparaciones con arrays
//console.log([] === []); // false - En JavaScript, los arrays son objetos y la comparación con === verifica referencias en memoria, no valores.
console.log([] + []); // "" - Los arrays vacíos se convierten en cadenas de texto vacías, por lo que la concatenación da una cadena vacía.
console.log([1, 2] + [3, 4]); // "1,23,4" - La conversión a string convierte cada array a "1,2" y "3,4", y luego los concatena como cadenas.
console.log([1] + 1); // "11" - El array se convierte en "1" y luego se concatena con "1" como string.
console.log([1] - 1); // 0 - El array se convierte en un número (1), y se hace la operación 1 - 1.

// Comparaciones con objetos
console.log({} + {}); // "[object Object][object Object]" - Los objetos se convierten a strings "[object Object]" y luego se concatenan.
//console.log({} === {}); // false - Cada objeto es una instancia diferente en memoria.
//console.log([] === {}); // false - Un array y un objeto son tipos de referencia distintos.

// Comparaciones especiales
console.log(null + 1); // 1 - `null` se convierte en 0 antes de la suma.
console.log(undefined + 1); // NaN - `undefined` no puede convertirse en un número, por lo que la operación no es válida.
console.log(null == 0); // false - `null` solo es igual a `undefined` en comparaciones débiles (==).
console.log(null <= 0); // true - `null` se convierte en 0 antes de la comparación.
console.log(undefined == null); // true - `undefined` y `null` son considerados "similares" en comparaciones con `==`.

// Operaciones con NaN
console.log(NaN + 1); // NaN - Cualquier operación con `NaN` da como resultado `NaN`.
console.log(NaN == NaN); // false - `NaN` nunca es igual a nada, ni siquiera a sí mismo.
console.log(NaN === NaN); // false - Misma razón que arriba, `NaN` no es estrictamente igual a `NaN`.
