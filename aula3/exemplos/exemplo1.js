const names = ["john", "felipe", "neneko", "augusto", "silvia"];

// For completo
for (let index = 0; index < names.length; index++) {
  const currentName = names[index];
  console.log(`FOR Completo = o nome da posição ${index} é : ${currentName}`);
}

// for in
for (let index in names) {
  console.log(`FOR IN =  o nome da posição ${index} é : ${names[index]}`);
}

// for-of
let index2 = 0;
for (let name of names) {
  console.log(`FOR Of =  o nome da posição ${index2} é : ${name}`);
  index2++;
}

// While
let index3 = 0;
while (index3 < names.length) {
  console.log(`WHILE =  o nome da posição ${index3} é : ${names[index3]}`);
  index3++;
}

let number = 0;
let maxNumber = 10;
while (number < maxNumber) {
  console.log(` ${number} x ${number} = ${number * number}`);
  number++;
}

// DO WHILE
let index4 = 0;
do {
  console.log(`DO WHILE =  o nome da posição ${index4} é : ${names[index4]}`);
  index4++;
} while (index4 < names.length);


/// substituir while pelo for
let index5 = 0;
for(;index5 < names.length;){
    console.log(`FOR WHILE =  o nome da posição ${index5} é : ${names[index5]}`);
    index5++
}

let index6 = 0;
for(;index6 < names.length; index6++){
    console.log(`FOR WHILE 2 =  o nome da posição ${index6} é : ${names[index6]}`);
}
