const LegendariesService = require('../services/LegendariesService');

const controller = {
    index: (req, res) => {
        const { name } = req.query;
        const legendary = LegendariesService.listLegendaries();        
        return res.send(legendary);
    },

    create: (req, res)=>{
        const{
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        } = req.body;

        if(!description){
            return res.status(400).json({error: "Description is required"});
        }

       const pokemon = LegendariesService.createLegendary(name, description, type, healthPoints, specialAttack,
            defense, attack, experience, specialDefense);

        res.json(pokemon);
    },

    update: (req, res)=>{

        const {id} = req.params;
        const{
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        } = req.body;

        const pokemon = LegendariesService.updateLegendary(id, name, description, type, healthPoints, specialAttack,
            defense, attack, experience, specialDefense);
        res.json(pokemon);

    },

    delete: (req, res)=>{
        const {id}= req.params;
        const legendary = LegendariesService.deleteLegendary(id)
        res.json(legendary);
    }
}

module.exports = controller;