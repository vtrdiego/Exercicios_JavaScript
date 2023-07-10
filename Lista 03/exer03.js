var a=Number(prompt('Digite o número:'))
var b=Number(prompt('Digite o número:'))
var c=Number(prompt('Digite o número:'))

function maior(a,b,c){
	document.write('O maior é:'+Math.max(a,b,c))
}
maior(a,b,c)

function menor(a,b,c){
	document.write('<br>O menor é:'+Math.min(a,b,c))
}
menor(a,b,c)
