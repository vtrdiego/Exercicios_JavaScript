var a=1
var b=1
var proximo=0

var n=Number(prompt('Digite o número'))

for(var i=0;i<n;i++){
	var proximo=a+b
	var a=b
	var b=proximo
document.write('<br>'+a)
console.log('<br>'+a)
}