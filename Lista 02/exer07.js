var soma=0
var maior=0
var menor=9999


for(var i=0;i<50;i++){
var random=Math.random()*50
console.log('<br>'+random)

if(random>=0 && random<=10){
if(random>maior){
maior=random}
if(random<menor){
menor=random}
var soma=soma+random
}
}
document.write('<br>O maior número é:' +Math.round(maior))
document.write('<br>O menor número é:' +Math.round(menor))
document.write('<br>A soma total é:'+Math.round(soma))