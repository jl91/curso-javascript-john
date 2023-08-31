/**
 * Conversão de Notas: Transforme suas notas em símbolos legais! 
 * Crie um programa que atribua letras (como A, B, C) para as notas que você obteve em um teste.
 */


const notesMap = [
    {
        min: 0,
        max: 7,
        note: "C"
    },
    {
        min: 7.1,
        max: 9.99,
        note: "B"
    },
    {
        min: 10,
        max: 10,
        note: "A"
    },
];

const note = 5;


for(let i = 0; i< notesMap.length; i++){

    const currentNote = notesMap[i];

    if(note >= currentNote.min && note <= currentNote.max ){
        console.log(`a sua media é : ${currentNote.note}`);
        break;
    }

}