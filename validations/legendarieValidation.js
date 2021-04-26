const yup = require('yup');

const legendary = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    type: yup.string().required(),
    healthPoints: yup.string().required(),
    specialAttack: yup.string().required(),
    defense: yup.string().required(),
    attack: yup.string().required(),
    experience: yup.string().required(),
    specialDefense: yup.string().required(),
});



module.exports = legendary;