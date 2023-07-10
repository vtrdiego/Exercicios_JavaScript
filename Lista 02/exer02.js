var fatorial = Number(prompt('Digite o valor:'))
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
document.write('<br>'+resultado)
console.log(resultado);