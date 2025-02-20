
// inicio do Código 1
function inverterString(str) {
    return str.split('').reverse().join('');
}

let entrada = "Viterio Lindo";
let saida = inverterString(entrada);
console.log(saida);
// Final do Código 1 


// inicio do Código 2
function encontrarMaiorNumero(array) {
    return Math.max(array);
}

let numeros = [10, 5, 20, 8, 15];
let maiorNumero = Math.max(...numeros);
console.log(maiorNumero); // saida: 20
// Final do Código 2

// inicio do Código 3
function ehPrimo(num) {
    if (num <= 1) return "Não é primo";
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return "Não é primo";
    }
    return "o numero é primo";
  }

let numero = 7;
let resultado = ehPrimo(numero);
console.log(resultado); // Saída: "É primo"
// Final do Código 3

// Inicio do Código 4
function fibonacciAteN(n) {
    var fib = [0,1];
    var proximo = fib[0] + fib[1];
    while (proximo <= n){
        fib.push(proximo);
        proximo = fib [fib.length - 1] + fib [fib.length - 2];}
    return fib;
}
var n = 10;
var sequenciaFibonacci = fibonacciAteN(n);
console.log(sequenciaFibonacci); // Saída: [0, 1, 1, 2, 3, 5, 8]
// Final do Código 4

// inicio do Código 5
function contarCaracteres(str) {
    var contagem = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (contagem[char]) {
            contagem[char]++;
        } else {
            contagem[char] = 1;
        }
    }
    return contagem;
}

var texto = "viterio";
var contagemCaracteres = contarCaracteres(texto);
console.log(contagemCaracteres); // Saída: { b: 1, a: 3, n: 2 }
// Final do Código 5


//ajuda do viterio