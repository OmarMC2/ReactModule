import React from "react";


function Calculadora({firstValue, secondValue, operator="" }) {
    let result = 0;
switch (operator) {
    case 'suma':
        result =firstValue+secondValue
    firstValue && secondValue === Number? result: 'Uno de los valores no es un numero'    
        break;
    case 'resta':
        result =firstValue-secondValue
        firstValue && secondValue === Number? result: 'Uno de los valores no es un numero'    

        break;
    case 'multi':
        result =firstValue*secondValue
        firstValue && secondValue === Number? result: 'Uno de los valores no es un numero'    

        break;
    case 'div':
        result =firstValue/secondValue
        firstValue && secondValue === Number? result: 'Uno de los valores no es un numero'    

        break
    default:
       result = 'El operador no es valido';
        break;
}
    return(<div>
            <h2>el resultado de la operacion es: {result} </h2>
        </div>)
}

export default Calculadora;
