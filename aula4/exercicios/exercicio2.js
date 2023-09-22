

/*const denominador = 5;
const multiplicador = 8;

 function tabuada(denominador, multiplicador){
  for(let index = 1; index <= multiplicador; index++){
    console.log(`${denominador} X ${index} = ${denominador * index}`);
  }

 }

 tabuada(5, 8);*/

 

const denominador = 2;
const multiplicador = 10;


  function tabuada(denominador, multiplicador){

    let resultado = [];

    for(index = 1; index <= multiplicador; index++){
    
     resultado.push(`${denominador} X ${index} = ${denominador * index}`);
        
    }
   
    return resultado.join("\n");

  }

  const resultadoTabuada = tabuada(denominador, multiplicador);

  console.log(resultadoTabuada);
