var ano=parseInt(prompt('Digite o ano para saber se é bissexto:'))

if(ano%4==0&&ano%100!=0){
	document.write('O ano é bissexto!')
}else{
	document.write('O ano não é bissexto!')
}