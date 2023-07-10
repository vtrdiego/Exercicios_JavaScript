var soma=0
var soma1=0
var mult=0
var soma2=0

for(var i=3;i<100;i++){
if(i%2==0){
var soma=soma+i
}
}
document.write('<br>A soma dos números pares é:'+soma)
console.log(''+soma)

for(var i=1;i<=100;i++){
var mult=i*i
var soma1=soma1+mult
}
document.write('<br>A soma dos quadrados é:'+soma1)
console.log('<br>'+soma1)

for(var i=0;i<=100;i++){
if(i%2!=0){
var soma2=soma2+i
}
}
document.write('<br>A soma dos ímpares é:'+soma2)
console.log('<br>'+soma2)

