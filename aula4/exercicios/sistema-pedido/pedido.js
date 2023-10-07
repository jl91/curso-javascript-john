let idGlobal = 0;

export class Pedido{

    constructor(){
        ++idGlobal
        this.id = idGlobal;
    }
    
    id = 0;

    itens = [];

    total = 0;


    adicionarItem(produto, callback){

        const lastItemIndex = this.itens.length - 1;

        const id = this.itens[lastItemIndex] !== undefined 
        ? this.itens[lastItemIndex].id + 1 
        : 1

        produto.id = id;

        this.itens.push(produto);
        this.calcTotal();

        callback(this.total);

    }

    removerItem(produto, callback){

        callback(this.total);
    }


    calcTotal(){
        this.total = this.itens.reduce(
            function(previous, current) {
                return previous += current.price;
            }, 
            this.total
        );
    }


    imprimirRecibo(){

        if(this.itens.length <= 0){
            console.log("Não há produtos no carrinho");
            return;
        }

        const recibo = `
        
            Pedido: ${this.id}

            contém os itens: ${this.printProdutos}

            total: ${this.total}

        `;

        console.log(recibo);
    }

    printProdutos(){
        return this.itens
        .map(function(produto){
            return this.printProduto(produto)
        })
        .join("\n _________________________________\n");
    }

    printProduto(produto){
        return `id produto: ${produto.id}, nome: ${produto.name}, preço: ${produto.price}`;
    }
    
}