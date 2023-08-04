/**
 * 
 * Problema: Calculadora de Desconto Personalizada
 * Você é responsável por desenvolver uma calculadora de desconto personalizada para uma loja online. 
 * A loja oferece diferentes descontos com base no valor total da compra. Seu objetivo é criar um programa que, 
 * dado o valor total da compra e o código de desconto, calcule e exiba o valor total com o desconto aplicado.
 
 * Regras de desconto:
 * Se o valor total da compra for menor que R$ 100, não haverá desconto.
 * Se o valor total da compra estiver entre R$ 100 (inclusive) e R$ 500 (exclusive), o desconto será de 10%.
 * Se o valor total da compra estiver entre R$ 500 (inclusive) e R$ 1000 (exclusive), o desconto será de 20%.
 * Se o valor total da compra for igual ou superior a R$ 1000, o desconto será de 25%.
 * Códigos de desconto:


* Bem-vindo à Calculadora de Desconto Personalizada!

 

 * Valor total antes do desconto: R$ 750.00
 * Desconto aplicado: 20%
 * Valor economizado: R$ 150.00
 * Valor total após desconto: R$ 600.00
 * Lembre-se de utilizar apenas estruturas de decisão (if/else) e concatenação de strings para resolver o problema. 
 * Boa codificação!
 */

const amount = -3;
const discount1 = 0.10;
const discount2 = 0.20;
const discount3 = 0.25;

if (amount < 0){
    console.log(" valor invalido");
} else if (amount < 100){
    console.log(`Valor total antes do desconto ${amount}`);
    console.log("Sem desconto aplicado");
    console.log("valor economizado: 0");
    console.log(`Valor total apos o desconto ${amount}`);
} else if (amount >= 100 && amount < 500){
    console.log(`Valor total antes do desconto ${amount}`);
    console.log(" Desconto aplicado: 10%");
    console.log(` Valor economizado: ${amount * discount1}`);
    console.log(`Valor total após o desconto: ${amount - (amount * discount1)}`);
} else if (amount >= 500 && amount < 1000 ){
    console.log(`Valor total antes do desconto ${amount}`);
    console.log(" Desconto aplicado: 20%");
    console.log(` Valor economizado: ${amount * discount2}`);
    console.log(`Valor total após o desconto: ${amount - (amount * discount2)}`);
} else if (amount >= 1000){
    console.log(`Valor total antes do desconto ${amount}`);
    console.log(" Desconto aplicado: 25%");
    console.log(` Valor economizado: ${amount * discount3}`);
    console.log(`Valor total após o desconto: ${amount - (amount * discount3)}`);
};



// Variação 1 utilizando usando substituições de strings https://developer.mozilla.org/en-US/docs/Web/API/console
// const amount = 1000;
// const discount1 = 0.10;
// const discount2 = 0.20;
// const discount3 = 0.25;

// const messageTotalAmount = "Valor total antes do desconto %d";
// const messageDiscountAmount = "Valor total antes do desconto %s";
// const messageEconomizedAmount = "valor economizado %d";
// const messageTotalAmountAfterDiscount = "Valor total apos o desconto %d";

// if (amount < 0){
//     console.log(" valor invalido");
// } else if (amount < 100){
//     console.log(messageTotalAmount, amount);
//     console.log(messageDiscountAmount, 0);
//     console.log(messageEconomizedAmount, 0);
//     console.log(messageTotalAmountAfterDiscount, amount);
// } else if (amount >= 100 && amount < 500){

//     console.log(messageTotalAmount, amount);
//     console.log(messageDiscountAmount, 0);
//     console.log(messageEconomizedAmount, amount * discount1);
//     console.log(messageTotalAmountAfterDiscount, amount - (amount * discount1));

// } else if (amount >= 500 && amount < 1000 ){
//     console.log(messageTotalAmount, amount);
//     console.log(messageDiscountAmount, "20%");
//     console.log(messageEconomizedAmount, amount * discount2);
//     console.log(messageTotalAmountAfterDiscount, amount - (amount * discount2));

// } else if (amount >= 1000){

//     console.log(messageTotalAmount, amount);
//     console.log(messageDiscountAmount, "25%");
//     console.log(messageEconomizedAmount, amount * discount3);
//     console.log(messageTotalAmountAfterDiscount, amount - (amount * discount3));
// };




// let appliedDiscount = "0";
// let totalDiscount = 0;
// let totalAmount = 0


// if (amount < 0){
//     console.log(" valor invalido");
//     return;
// } 

// if (amount >= 100 && amount < 500){
//     appliedDiscount = "10%";
//     totalDiscount = amount * discount1;
//     totalAmount = amount - (amount * discount1);
// } 

// if (amount >= 500 && amount < 1000 ){
//     appliedDiscount = "20%";
//     totalDiscount = amount * discount2;
//     totalAmount = amount - (amount * discount2);
// } 

// if (amount >= 1000){
//     appliedDiscount = "25%";
//     totalDiscount = amount * discount3;
//     totalAmount = amount - (amount * discount3);
// }


//     console.log(`Valor total antes do desconto ${amount}`);
//     console.log("Sem desconto aplicado");
//     console.log("valor economizado: 0");
//     console.log(`Valor total apos o desconto ${amount}`);