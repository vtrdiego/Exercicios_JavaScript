function celsius(temp){
	document.write('A temperatura em Celsius é:'+(temp-32)/1.8)
}
function fahrenheit(temp){
	document.write('A temperatura em Fahrenheit é:'+(temp*1.8+32))
}

var conver=prompt('Digite C para converter em Celsius, ou F para converter em Fahrenheit:')
conver=conver.toLowerCase()

switch(conver){
	case 'c':
	var temp=parseFloat(prompt('Digite a temperatura em Fahrenheit para converter em Celsius:'))
	celsius(temp)
	break
	
	case 'f':
	var temp=parseFloat(prompt('Digite a temperatura em Celsius para converter em Fahrenheit:'))
	fahrenheit(temp)
	break
	
	default:
	document.write('Inválido')
}

	