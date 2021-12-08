import React from "react";


function Calculadora({firstValue, secondValue, operator="" }) {
    if(!Number.isInteger(firstValue) === true )
        return(
            <div>
                <span>El primer valor no es valido </span>
            </div>
        )
    if(!Number.isInteger(secondValue) === true )
        return(
            <div>
                <span>El segundo valor no es valido</span>
            </div>
        )
    // if(!['suma','resta','multiplicacion', 'division'].includes(operator) === true )
    //     return(
    //         <div>
    //             <span>El operador no es valido no es valido</span>
    //         </div>
    //     )

    
    let result = 0;
switch (operator) {
    case 'suma':
        result =firstValue+secondValue    
        break;
    case 'resta':
        result =firstValue-secondValue   
        break;
    case 'multiplicacion':
        result =firstValue*secondValue
        break;
    case 'division':
        result =firstValue/secondValue   
        break
    default:
        return(
       <div>
           <span> El operador no es valido </span>
       </div>
        )
}
return(<div>
        <span>El resultado de su {operator} es igual a {result}</span>
    </div>)
    
}

export default Calculadora;
