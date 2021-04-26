function Logger(req,res,next){
    console.log('Backend - Pokedex');
    next();
}

module.exports = Logger;