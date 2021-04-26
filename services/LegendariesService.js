const LegendaryModel = require('../models/LegendaryModel');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const readFile = ()=>{
    return JSON.parse(fs.readFileSync('./database/items.json', 'utf-8'));
}

const LegendariesService = {

    listLegendaries: () => {
     const content = readFile();
     return content;
    },
    listPokemonData: (pokemonName) => {
        // Preguiça de fazer esse
    },

    createLegendary: (
        name, description, type, healthPoints, specialAttack,
        defense, attack, experience, specialDefense
    )=>{
        const currentContent = readFile();

        const newLegendary = new LegendaryModel(
        uuidv4(), name, description, type, healthPoints, specialAttack,
        defense, attack, experience, specialDefense
        );

        currentContent.push(newLegendary);
        fs.writeFileSync('./database/items.json', JSON.stringify(currentContent), 'utf-8') 

        return newLegendary;
    },

    updateLegendary: (
        id, name, description, type, healthPoints, specialAttack,
        defense, attack, experience, specialDefense
    )=>{
        const newLegendary = new LegendaryModel(id, name, description, type, healthPoints, specialAttack,
        defense, attack, experience, specialDefense);

        const currentContent = readFile();

        const selectedItem = currentContent.findIndex((item)=> item.id === id);

        if(selectedItem !== -1){     
            pokemonList[selectedPokemon] = {
                id,
                name,
                description,
                type,
                healthPoints,
                specialAttack,
                defense,
                attack,
                experience,
                specialDefense
            }
            fs.writeFileSync('./database/items.json', JSON.stringify(pokemonList), 'utf-8');
    
            return pokemonList[selectedItem];
    
            }else{
                return "ID not found";
            }
    },
    
    deleteLegendary : (id)=>{

        const pokemonList = readFile();
        const selectedPokemon = pokemonList.findIndex((item)=> item.id == id);
        if(selectedPokemon !== -1){     
        pokemonList.splice(selectedPokemon,1);
        fs.writeFileSync('./database/items.json', JSON.stringify(pokemonList), 'utf-8');
        return pokemonList;
        }else{
            return "ID not found";
        }

    }
}

module.exports = LegendariesService;