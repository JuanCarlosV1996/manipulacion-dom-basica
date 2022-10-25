/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
}
);

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img');
console.log(img);

pid.innerHTML = "";
pid.append(img);
//pid.appendChild(img);*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const result = document.querySelector('#Result');
const btn = document.querySelector('#btnCalcular');

/*form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault();
    const res = input1.value + input2.value;
    result.innerText = "Resultado: " + res;
}*/

form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    //console.log({event});
    //event.preventDefault();
    const res = input1.value + input2.value;
    result.innerText = "Resultado: " + res;
}
