var divisores=0
var parada=0

var numero=Number(prompt('Digite o número para saber se é primo:'))
for(var i=0;i<=numero;i++){
	divisores++
	if(numero%divisores==0){
		parada++
	}
}
if(parada>2){
		document.write(numero+' não é primo!')
		
}else{
document.write(numero+' é primo!')
}

