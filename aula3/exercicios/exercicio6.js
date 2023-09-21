/**
 * Exercício 7: Contagem de Ocorrências
 * Implemente um programa que conte quantas vezes um determinado número aparece em um array de inteiros.
 */

class Ocurrence {
  constructor(number, times) {
    this._number = number;
    this._times = times;
  }

  get times() {
    return this._times;
  }

  get number() {
    return this._number;
  }
}

const numbers = [
  22, 123, 1, 1, 5, 66, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 12, 45,
  45, 9, 8, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123,
  123, 123,
];

const ocurrencies = [];

for (let number of numbers) {
    
  let currentOcurrency = ocurrencies.find(function (ocurrency) {
    return ocurrency.number === number;
  });

  if (currentOcurrency === undefined) {
    currentOcurrency = new Ocurrence(number, 0);
    ocurrencies.push(currentOcurrency);
  }

  currentOcurrency._times++;
}

console.log(ocurrencies);
