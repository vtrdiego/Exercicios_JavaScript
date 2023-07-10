var um=0
var dois=0
var tres=0
var quatro=0
var cinco=0
var seis=0

for(var i=0;i<100;i++){
	var numero=Math.random()*6
	console.log('numero')
	document.write('<br>'+Math.round(numero))
switch(Math.round(numero)){
	case 1:
	um+=1
	break
	case 2:
	dois+=1
	break
	case 3:
	 tres+=1
	break
	case 4:
	 quatro+=1
	break
	case 5:
	 cinco+=1
	break
	case 6:
	 seis+=1
	break
}
}
document.write('<br>A frequência do um é:'+um)
document.write('<br>A frequência do dois é:'+dois)
document.write('<br>A frequência do três é:'+tres)
document.write('<br>A frequência do quatro é:'+quatro)
document.write('<br>A frequência do cinco é:'+cinco)
document.write('<br>A frequência do seis é:'+seis)
