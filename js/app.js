/* --------------------------Clase03--------------------------------
const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName("h1");

let myH3 = myDoc.getElementById("h3id");

console.log(myH1);
console.log(myH3);

myH3.innerText = "Ahora cambio";
myH3.innerHTML = "<button>Esto es un boton</button>";

const myButtonStr = "<button>Boton Azul</button>";

//while, do while, for

var cant_elementos = parseInt(prompt("cuantos botones?"));

for (let index = 0; index < cant_elementos; index++) {
    myH3.innerHTML = myH3.innerHTML + myButtonStr;
} */




/*--------------------------Clase04--------------------------------

let myDom = document;

//objeto con comillas
const myDog = {
    "name": "Mancho y pure",
    "age": 3,
    "legs": 4
};

//objeto sin comillas (es lo mismo)
const myCat = {
    name: "Nikita",
    age: 15,
    legs: 4
};

//ve por sonsola los datos cargados
console.log(myDog.name);
console.log(myCat.name);

//agerga una propiedad al objeto creado anteriormente
myCat.tail =1;

console.log(myCat.tail);

//Otra forma de armar un objeto, con function se hacian los objetos antes
function Mouse() {
    this.age = 4;
    this.name = "Perez";
}


//Creado de clase y constructor (asi quiere el armar los objetos)
class Mouse {
    constructor(name, legs, tail) {
        this.name = name;
        this.legs = legs;
        this.tail = tail;
    }
}

//Nuevo objeto asignando valores
const myMouse = new Mouse("Perez",4,1);

console.log(myMouse);*/

/*--------------------------Clase05--------------------------------*/
import Button from "./components/button.js";
import Video from "./components/video.js";


const myApp = document.getElementById("myApp");

let myButton = new Button("Login", "btn btn-success");

myApp.innerHTML = myButton.buildHTMLString();

let myVideo =  new Video("https://www.w3schools.com/tags/movie.mp4", 320,240, "none");

myApp.innerHTML += myVideo.render();





/*--------------------------Clase06--------------------------------*/


