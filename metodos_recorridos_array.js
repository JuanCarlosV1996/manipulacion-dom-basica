//FILTRAR
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 2500 },
    { nombre: "Audifonos", costo: 1700 }
];

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

//MAPEAR
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});

//ENCONTRAR
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";   
});

//Solo nombres en especifico no todo el array
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
   });

   //True o false con some
   var articulosBaratos = articulos.some (function(articulo){
    return articulo.costo <= 700;
});

//Borrar ultimo elemento del array
let borrarUltimoElemento = articulos.pop();