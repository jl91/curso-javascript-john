/**

Problema: Sistema de Gestão de Pedidos

Imagine que você está construindo um sistema de gestão de pedidos para um restaurante. 
Você precisa criar classes e funções para lidar com a criação e o gerenciamento de pedidos. 

Aqui estão as especificações:

Crie uma classe chamada Produto que tenha as seguintes propriedades:

id (número único)
nome (string)
preco (número)

Crie uma classe chamada Pedido que tenha as seguintes propriedades:

id (número único)
itens (um array de objetos do tipo Produto)
total (número, inicialmente 0)

Crie uma função chamada adicionarItem que permita adicionar um produto a um pedido. 
Esta função deve receber como parâmetro o objeto do tipo Produto a ser adicionado e uma função de 
callback que será chamada após a adição do item. A função de callback deve receber o valor 
total atual do pedido.

Crie uma função chamada removerItem que permita remover um produto de um pedido com base no 
id do produto. Esta função também deve receber uma função de callback que será chamada após a 
remoção do item. A função de callback deve receber o valor total atual do pedido.

Crie uma função chamada calcularTotal que calcula o valor total do pedido com base nos produtos 
adicionados.

Crie uma função chamada imprimirRecibo que imprime um recibo com todos os itens do pedido e o 
valor total.

Crie um objeto do tipo Pedido e vários objetos do tipo Produto. Adicione alguns produtos ao 
pedido e remova alguns produtos. Certifique-se de usar callbacks para atualizar o valor total do 
pedido e imprimir o recibo após cada alteração.

Certifique-se de testar seu código com diferentes cenários para garantir que ele funcione 
corretamente. Este problema envolve o uso de callbacks para atualizar o estado do pedido e 
exibir informações relevantes. Ele também envolve a criação de classes e objetos para modelar 
o sistema de gestão de pedidos de um restaurante.
*/

import {Sistema} from "./sistema.js";


function main(){
    return new Sistema().inicializar();
}

main();