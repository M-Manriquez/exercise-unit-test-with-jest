const { sum } = require("./app.js");

test("adds 14 + 9 to equals 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
  // Importo la funcion desde app.js
  const { fromEuroToDollar } = require("./app.js");

  // Uso la función como debe ser usada
  const dollars = fromEuroToDollar(3.5);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 3.5 * 1.07;

  // Hago mi comparación (la prueba)
  expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("Un dolar deben ser 156.5 yenes", () => {
  const { fromDollarToYen } = require("./app.js");

  const yenes = fromDollarToYen(1);

  const expected = 1 * 156.5;

  expect(fromDollarToYen(1)).toBe(156.5);
});

test("Un yen deben ser 0.87 libras esterlinas", () => {
  const { fromYenToPound } = require("./app.js");

  const libras = fromYenToPound(1);

  const expected = 1 * 0.87;

  expect(fromYenToPound(1)).toBe(0.87);
});
