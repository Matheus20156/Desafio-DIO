let nome = "Matheus"
let experiencia = 0
let nivelDoHeroi;

if(experiencia <= 1000){
    nivelDoHeroi="Ferro"
}else if (experiencia >=1001 && experiencia <=2000){
    nivelDoHeroi = "bronze"
}else if(experiencia >= 2001 && experiencia <=5000){
    nivelDoHeroi="prata"
}else if(experiencia >=5001 && experiencia<= 7000){
    nivelDoHeroi="ouro"
}else if(experiencia >=7001 && experiencia<=8000){
    nivelDoHeroi="platina"
}else if(experiencia >= 8001 && experiencia <= 9000){
    nivelDoHeroi="ascendente"
} else if(experiencia >=9001 && experiencia <=10000){
    nivelDoHeroi="imortal"
}else{
    nivelDoHeroi="Radiante"
}
console.log("O Herói De nome: " + nome + " com experiencia " +experiencia+ " está no nivel: " +nivelDoHeroi)

for (let i = 1; i <= 8; i++) {
    experiencia += 1500;

if(experiencia <= 1000){
    nivelDoHeroi="Ferro"
}else if (experiencia >=1001 && experiencia <=2000){
    nivelDoHeroi = "bronze"
}else if(experiencia >= 2001 && experiencia <=5000){
    nivelDoHeroi="prata"
}else if(experiencia >=5001 && experiencia<= 7000){
    nivelDoHeroi="ouro"
}else if(experiencia >=7001 && experiencia<=8000){
    nivelDoHeroi="platina"
}else if(experiencia >= 8001 && experiencia <= 9000){
    nivelDoHeroi="ascendente"
} else if(experiencia >=9001 && experiencia <=10000){
    nivelDoHeroi="imortal"
}else{
    nivelDoHeroi="Radiante"
}
console.log("Missão "+ i + " O Herói de nome: "+ nome + " com nova experiencia: "+ experiencia + " está no nível " +nivelDoHeroi)
}
