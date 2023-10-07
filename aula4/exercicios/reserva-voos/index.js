/**
 * Claro! Aqui está outro problema em JavaScript que envolve callbacks, objetos, 
 * classes e arrays em um nível intermediário a avançado:

Problema: Sistema de Reservas de Voos

Você está desenvolvendo um sistema de reservas de voos para uma companhia aérea. 
Precisamos criar classes e funções para gerenciar a reserva de assentos em voos. 
Aqui estão as especificações:

Crie uma classe chamada Voo que tenha as seguintes propriedades:

numeroVoo (string)
assentosDisponiveis (um array de números, onde cada número representa um assento disponível)
Crie uma classe chamada Passageiro com as seguintes propriedades:

nome (string)
numeroAssento (número)
Crie uma função chamada reservarAssento que permita que um passageiro reserve um assento em um voo. 
Esta função deve receber um objeto do tipo Voo, um objeto do tipo Passageiro e uma função de 
callback que será chamada após a reserva ser concluída com sucesso. A função de callback deve 
receber o número do assento reservado.

Crie uma função chamada cancelarReserva que permita que um passageiro cancele sua reserva em um voo.
 Esta função deve receber um objeto do tipo Voo, o número do assento a ser cancelado e uma função 
 de callback que será chamada após o cancelamento ser concluído com sucesso. 
 A função de callback deve receber o número do assento cancelado.

Crie uma função chamada verificarDisponibilidade que verifica se um determinado assento em um voo 
está disponível ou não. Esta função deve receber um objeto do tipo Voo e o número do assento a ser 
verificado, e deve retornar true se o assento estiver disponível e false caso contrário.

Crie uma função chamada listarAssentosDisponiveis que lista todos os assentos disponíveis em um voo. 
Esta função deve receber um objeto do tipo Voo e retornar um array com os números dos assentos 
disponíveis.

Crie um objeto do tipo Voo e vários objetos do tipo Passageiro. Realize reservas e cancelamentos 
de assentos em voos diferentes e verifique a disponibilidade de assentos. Use callbacks para 
atualizar o estado do voo e do passageiro após cada operação.

Certifique-se de testar seu código com diferentes cenários para garantir que ele funcione 
corretamente. Este problema envolve o uso de callbacks para realizar operações de reserva e 
cancelamento de assentos em voos, bem como a verificação da disponibilidade de assentos e listagem 
dos assentos disponíveis em um voo.
 */

import {Sistema} from "./sistema.js";


function main(){
    return new Sistema().inicializar();
}

main();