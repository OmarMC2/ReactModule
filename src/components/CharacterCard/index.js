import React from 'react'
import "./CharacterCard.css"

function CharacterCard({name, status, species, image}) {
    



    return (
        <div class="cardContent">
            <div>
                <img class= "imagStyle" alt="personaje" src={image}/>
            </div>            
            <ul class="characterInfo" > 
                <li class="infoElement">Nombre: {name} </li>
                <li class="infoElement">Estado: {status} </li>
                <li class="infoElement">Especie: {species} </li>
            </ul>
        </div>
    )
}
export default CharacterCard