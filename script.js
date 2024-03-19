// Questão 1
const indice = 13;

let soma = 0
let k = 0


while (k < indice) {
  k = k + 1
  soma = soma + k
}

console.log(soma); // resposta 91

///////////////////////////////////////////////

// Questão 2 
function findNumber(number) {
  let arrayFibonacci = [0, 1];
  let lastNumber = arrayFibonacci[1];
  let secondLastNumber = arrayFibonacci[0];

  for (let i = 0; i < arrayFibonacci.length; i++) {
    const result = secondLastNumber + lastNumber;
    arrayFibonacci.push(result);

    secondLastNumber = lastNumber;
    lastNumber = arrayFibonacci[arrayFibonacci.length - 1];

    if (arrayFibonacci.includes(number)) {
      return "O número informado pertence a sequência de Fibonacci";
    }

    if (lastNumber > number) {
      return "O número informado não pertence a sequência de Fibonacci";
    }
  }
}

console.log(findNumber(5));

///////////////////////////////////////////////

// Questão 5
function reverseString(string) {
  let invertedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }

  return invertedString;
}


console.log(reverseString("Estagiário Ribeirão Preto 2024")); // 4202 oterP oãriebiR oiráigatsE