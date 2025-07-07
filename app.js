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
  const euros = valueInDollar / 1.07;
  return euros * 156.5;
};

const fromYenToPound = (valueInYen) => {
    const euros = valueInYen / 156.5;
    return euros * 0.87;
};

console.log(sum(7, 3));
console.log(fromDollarToYen(1));
console.log(fromYenToPound());
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
