//contar caracteres em uma string
function contarcaracteres(str) {
    let contagem = {};
    for (let char of str){
      contagem[char] = (contagem[char] || 0) + 1;
    }
    console.log(contagem);
}
congtarcaracteres("banana")