var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijeras";

var resultado = function (user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3){
            console.log("El usuario GANO con " + op1)
        } else if (user === op2 && cpu === op1) {
            console.log("El usuario GANO con " + op2)
        } else if (user === op3 && cpu === op2) {
            console.log("El usuario GANO con " + op3)
        } else {
            console.log("La cpu GANO!!")
        } 
    } else if (user === cpu) {
        console.log("Empate")
    }
};

resultado(op1,op3);