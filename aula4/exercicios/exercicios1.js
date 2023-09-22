/**
 * Dado uma determinada coleção de dados de alunos, 
 * cria uma função de callback necessária para filtrar todos os alunos que tenham idade maior que 18 anos, 
 * e que tenham notas maior ou igual a 'c' em português e matemática, lembrando que as notas devem 
 * ser analisadas por seu valor no mapa de notas
 */

// Exemplo de filter
//console.log(data.filter(function(letter){return letter === "a"}))



class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
}

class Materia {
    constructor(nome, nota) {
        this._nome = nome;
        this._nota = nota;
    }
}

const notas = {
    "a": 10,
    "b": 9,
    "c": 8,
    "d": 7,
    "e": 6,
    "f": 5,
    "g": 4,
    "h": 3,
    "i": 2,
    "j": 1,
    "k": 0,
};

const alunos = [
    new Aluno(
        'João', 
        22, 
        [
            new Materia('Português', 10), 
            new Materia('Matemática', 6)
        ]
    ),
    new Aluno(
        'Cleber', 
        20, 
        [
            new Materia('Português', 8), 
            new Materia('Matemática', 6)
        ]
    ),
    new Aluno(
        'Maíra', 
        21, 
        [
            new Materia('Português', 8), 
            new Materia('Matemática', 7)
        ]
    ),
    new Aluno(
        'Marcos', 
        20, 
        [
            new Materia('Português', 10), 
            new Materia('Matemática', 3)
        ]
    ),
    new Aluno(
        'Victor', 
        18, 
        [
            new Materia('Português', 9), 
            new Materia('Matemática', 10)
        ]
    ),
    new Aluno(
        'Cleber', 
        20, 
        [
            new Materia('Português', 9), 
            new Materia('Matemática', 7)
        ]
    ),
    new Aluno(
        'Yago', 
        19, 
        [
            new Materia('Português', 1), 
            new Materia('Matemática', 3)
        ]
    ),
    new Aluno(
        'Marcelo', 
        15, 
        [
            new Materia('Português', 5), 
            new Materia('Matemática', 7)
        ]
    ),
    new Aluno(
        'Marcia', 
        17, 
        [
            new Materia('Português', 8), 
            new Materia('Matemática', 7)
        ]
    ),
];
