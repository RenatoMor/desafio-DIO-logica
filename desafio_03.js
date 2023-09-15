//-----------Desafio 03 - Escrevendo as Classes de um Jogo-------------

// --------------------Definindo a classe Heroi------------------------

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        } 
// -------------------------Método Atacar-----------------------------

        atacar() {
            let ataque;

//-------Estrutura condicional para definir o ataque de cada herói-----

            if (this.tipo === 'mago') {
                ataque = 'lançando a magia';
            } else if (this.tipo === 'guerreiro') {
                ataque = 'empunhando a espada';
            } else if (this.tipo === 'monge') {
                ataque = 'artes marciais';
            } else if (this.tipo === 'ninja') {
                ataque = 'arremeçando a shuriken';
            } else {
                ataque = 'usou ataque normal';
            }  
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
    }           
//-----------------Criando instâncias da classe Heroi------------------

        const heroi1 = new Heroi('mago', 30, 'mago');        
        const heroi2 = new Heroi('guerreiro', 30, 'guerreiro');        
        const heroi3 = new Heroi('monge', 30, 'monge');        
        const heroi4 = new Heroi('ninja', 30, 'ninja');
        
//---------------Chamando a função atacar() de cada herói--------------

        heroi1.atacar();
        heroi2.atacar();
        heroi3.atacar();
        heroi4.atacar();