class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }
}

class No {
    constructor(nome) {
        this.dados = new Pessoa(nome);
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
    }

    addFirst(nome, idade) {
        const newNo = new No(nome);
        newNo.dados.idade = idade;
        newNo.proximo = this.cabeca;
        this.cabeca = newNo;
    }
}

const listaPessoas = new ListaLigada();
listaPessoas.addFirst('Riquelme', 25);
listaPessoas.addFirst('Thayna', 30);
listaPessoas.addFirst('Leonardo', 22);

let atual = listaPessoas.cabeca;
while (atual) {
    console.log(`Nome: ${atual.dados.nome}, Idade: ${atual.dados.idade}`);
    atual = atual.proximo;
}