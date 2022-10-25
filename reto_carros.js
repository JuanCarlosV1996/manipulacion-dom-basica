//Inicializar las variables
let autos = [];
let cantidadAutos = 0;
let cantRegistrados = 0;

//Creo funciones constructoras

function Auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Le solicito al usuario cuantos autos va a registrar
cantidadAutos = prompt('Cuantos autos desea registrar');

/*Ejecuto este ciclo mientras la cantidad de autos registrados 
sea menor a la cantidad de autos que el usuario desea registrar*/
while (cantRegistrados < cantidadAutos) {
    //Defino variables
    let marca = prompt ('Marca: ');
    let modelo = prompt ('Modelo: ');
    let annio = prompt ('Año: ');

    //Paso las variables de scope local a la funcion constructora
    var autoNuevo = new Auto(marca, modelo, annio);

    //Agrego el auto a mi arreglo de autos
    autos.push(autoNuevo);

    //Incremento la cantidad de autos registrados en 1
    cantRegistrados++;
}



/*Retorno por consola el arreglo con todos los autos
registrados por el usuario */
console.log(autos);