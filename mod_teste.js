var msg = "Este é um módulo de teste";
function teste(){
    return "abc";
}

module.exports = teste();
/*module.exports = msg;

module.exports = function(){
    return "teste2"
}  obs: se eu utilizar assim, a chamada do req deve ser: require('mod_teste')() ou a var()*/