var valor=parseInt(Math.random()*5)
console.log('O valor é:',valor)

var n1=parseInt(prompt('Digite um valor para tentar acertar:'))

if(n1==valor){
	document.write('Você acertou!')
	document.write('<br>O valor escolhido pelo pc foi:',valor)
}else{
	document.write('Você errou!')
	document.write('<br>O valor escolhido pelo pc foi:',valor)
}