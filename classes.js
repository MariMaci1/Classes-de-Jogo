let heroi ={
    nome:"Mari",
    idade:"389",
}

let classe = ("guerreiro")

class classesHeroi{

    constructor(tipoHeroi, ataqueHeroi){
        this.tipoHeroi = tipoHeroi
        this.ataqueHeroi = ataqueHeroi
    }
    atacar(){
        console.log(`O ${this.tipoHeroi} atacou usando ${this.ataqueHeroi}`)
    }
}

let guerreiro = new classesHeroi("Guerreiro", "Espada")
let mago = new classesHeroi("Mago", "Magia")
let monge = new classesHeroi("Monge", "Artes Marcias")
let ninja = new classesHeroi("Ninja", "Shuriken")

console.log(heroi.nome, heroi.idade)

let heroiFinal
let resultadoRPG = classe
switch (classe){
    case "guerreiro": heroiFinal = guerreiro.atacar(); break;
    case "mago": heroiFinal = mago.atacar(); break;
    case "monge": heroiFinal = monge.atacar(); break;
    case "ninja": heroiFinal = ninja.atacar(); break;
    default: "Classe inválida!";
}

