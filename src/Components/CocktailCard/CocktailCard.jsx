import React, { useState } from 'react';
import './CocktailCard.scss';

const CocktailCard = (props) => {

    const [compteur, setCompteur] = useState(0);

    const click = (e) => setCompteur(compteur + 1);
    return (
        <div className='cocktail_card_container'>
            <div className='cocktail-card'>
                <img src={props.image} alt="" />
                <hr />
                <div className='cocktail-card-text-container' >
                    <h1>{props.name}</h1>
                    <ul>
                        {props.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
                    <button onClick={click}>{compteur}</button>
                </div>

            </div>
        </div>
    );
};

export default CocktailCard;