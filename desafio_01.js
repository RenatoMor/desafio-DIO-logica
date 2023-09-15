//------------Desafio 01 - Classificador de Nível de Herói------------

//------------------------Definindo as variáveis----------------------
let nome = "Chapolin";
let xp = 15000;
let nivel = "";
//---------Estrutura condicional para definir o nível do herói---------
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp < 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp < 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp < 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp < 8000) {
    nivel = "Diamante";
} else if (xp >= 8001 && xp < 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp < 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Desconhecido";
}
//-----------------Exibindo o nome e o nível do herói----------------

console.log(`O heroi de nome **${nome}** possui nível de **${nivel}**." `);
