let nome = "Matheus"
let experiencia = 0
let nivelDoHeroi;

if(experiencia <= 1000){
    nivelDoHeroi="Ferro"
}else if (experiencia >=1001 && experiencia <=2000){
    nivelDoHeroi = "Bronze"
}else if(experiencia >= 2001 && experiencia <=5000){
    nivelDoHeroi="Prata"
}else if(experiencia >=5001 && experiencia<= 7000){
    nivelDoHeroi="Ouro"
}else if(experiencia >=7001 && experiencia<=8000){
    nivelDoHeroi="Platina"
}else if(experiencia >= 8001 && experiencia <= 9000){
    nivelDoHeroi="Ascendente"
} else if(experiencia >=9001 && experiencia <=10000){
    nivelDoHeroi="Imortal"
}else{
    nivelDoHeroi="Radiante"
}
console.log("O Herói de nome: " + nome + " Tem de experiência " +experiencia+ " está no nivel: " +nivelDoHeroi)

for (let i = 1; i <= 8; i++) {
    experiencia += 1500;

if(experiencia <= 1000){
    nivelDoHeroi="Ferro"
}else if (experiencia >=1001 && experiencia <=2000){
    nivelDoHeroi = "Bronze"
}else if(experiencia >= 2001 && experiencia <=5000){
    nivelDoHeroi="Prata"
}else if(experiencia >=5001 && experiencia<= 7000){
    nivelDoHeroi="Ouro"
}else if(experiencia >=7001 && experiencia<=8000){
    nivelDoHeroi="Platina"
}else if(experiencia >= 8001 && experiencia <= 9000){
    nivelDoHeroi="Ascendente"
} else if(experiencia >=9001 && experiencia <=10000){
    nivelDoHeroi="Imortal"
}else{
    nivelDoHeroi="Radiante"
}
console.log("Missão "+ i + " O Herói de nome: "+ nome + " com nova experiência: "+ experiencia + " está no nível " +nivelDoHeroi)
}