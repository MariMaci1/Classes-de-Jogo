let heroi ={
    nome:"Mari",
    idade:"389",
}


let classe = ("mago")

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
let monje = new classesHeroi("Monje", "Artes Marcias")
let ninja = new classesHeroi("Ninja", "Shuriken")


console.log(heroi.nome, heroi.idade)

guerreiro.atacar()
mago.atacar()
monje.atacar()
ninja.atacar()