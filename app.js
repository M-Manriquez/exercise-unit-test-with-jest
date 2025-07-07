// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
  // Convertimos el valor a dólares
  let valueInDollar = valueInEuro * 1.07;
  // Retornamos el valor en dólares
  return valueInDollar;
};

const sum = (a, b) => {
  return a + b;
};

const fromDollarToYen = (valueInDollar) => {
  return valueInDollar * 156.5;
};

const fromYenToPound = (valueInYen) => {
  return valueInYen * 0.87;
};
console.log(sum(7, 3));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
