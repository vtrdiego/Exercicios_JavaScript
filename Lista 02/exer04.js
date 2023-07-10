var n=Number(prompt('Digite a nota:'))
 
 while(n>10){
	 alert('Valor inválido! Continue tentando:')
	 var n=Number(prompt('Digite a nota:'))
 }
 document.write('Valor correto!')
 document.write('<br>',n)