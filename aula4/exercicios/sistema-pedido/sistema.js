import ReadLine  from "readline";

import {Pedido} from "./pedido.js";
import {Produto} from "./produto.js";

export class Sistema{

    pedidos = [];

    pedidoAtual = null

    constructor(){
        this.reader = ReadLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("Inicializando Sistema de pedidos...");
        
        this.pedidoAtual = new Pedido();
    }

    inicializar(params) {
  
        this.reader.question(
            ` Selecione o menu
            1) para ver os produtos no carrinho 
            2) para adicionar um produto no carrinho
            3) para sair
            
            digite: `, 
            (answer) => {

                if(answer === '1'){
                    console.log(this.pedidoAtual);
                    this.pedidoAtual.imprimirRecibo();
                    return this.inicializar();
                }

                if(answer == '2'){
                    this.abrirTelaAdicionarProduto();
                    return;
                }

                if(answer == 3){
                    this.reader.close();
                    return;
                }

                console.log("Opção inválida");
                this.inicializar();
            }
        );
    }

    abrirTelaAdicionarProduto(){
        const produto = new Produto();

        this.openPromptProductName(produto).then(() => {
            
            this.openPromptProductPrice(produto).then(() => {
                
                this.pedidoAtual.adicionarItem(produto, (total) => {

                    console.log(`total a pagar: ${total}`);
                    console.log(`---------------------------`);

                    this.inicializar();
        
                });

            })
        });
    }

    openPromptProductName(produto){
        return new Promise( async resolve => {
            this.reader.question("Digite o nome do produto: ", (answer) => {
                produto.name = answer;
                resolve();
            });
        });
    }

    openPromptProductPrice(produto){
        return new Promise(async resolve => {

            this.reader.question("Digite o valor do produto: ", (answer) => {
                produto.price = answer;
                resolve();
            });
        })
    }
}