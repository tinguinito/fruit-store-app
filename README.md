* crear carpeta front end y backend
* crear index de html css y js
* linkear css y js
  ```
    <link rel="stylesheet" href="style.css">
    <script src="source.js"></script>
```
install plugins Live Serve
dar click al server y verlo funcionar en browser
```
abrir consola y mostrar ejemplo coerción:

```
var num1 = 3;
var num1 = 2;
```

```
num1 + num2 +'7' = 107;

num1 + num2  * '7' = 17;
```
mismo ejemplo con let
```
let num1 = 3;
let num1 = 2;


num1 + num2 +'7' = 107;

num1 + num2  * '7' = 17;

let sum = 'total'

sum = num1 + num2;
```

#Funtions
```
function addsum(x,y){

let result = x+y;
return result;
}
addsum(3,2);
```
#con console.log
```
function addsum(x,y){

let result = x+y;
return console.log(`El resultado es ${result}`);

}
addsum(3,2);
```
#function declarativas con return
```
function addsum(x,y){
return console.log(`El resultado es ${x+y}`);
}
addsum(3,2);
```

#funtions de expresion with arrow function
```
addsum2 = (x,y)=> console.log(`El resultado con arrow functions es: ${x+y} xD`); 
addsum2(4,1);

let unaFunc = (x,y)=> console.log(`El resultado con arrow functions es: ${x+y} xD`); 
```
#Object 
```
let person = {name: 'César', email: 'cesar@digitala.cl'};

person.email
person.name

`Mi nombre es ${person.name} y mi email es ${person.email}`

Fx within Object
let person1 = {
  nombre: 'Ana',
  saludo: function() {
    alert('¡Hola!, Soy '+ this.nombre + '.');
  }
}

person1.saludo();

let person2 = {
  nombre: 'Juan',
  saludo: function() {
    alert('¡Hola!, Soy '+ this.nombre + '.');
  }
}
person2.saludo();
```
