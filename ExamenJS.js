// VARIABLES >> TENEMOS VARIOS TIPOS DE VARIABLES

// LET > podemos reasignarle un valor >>> SON VARIABLES, podemos cambiar el valor
// CONST >> NO podemos reasignarle un valor > SON CONSTANTES 

// NO podemos declarar la variable LET ni CONST 2 veces en el mismo bloque de codigo 

// EJEMPLOS

const nombre = "Maxi";
let precio = 10;


//-----------------------------------------------------------------------------------------------------------------

//FUNCIONES > bloque de codigo que nos permite  realizar una tarea en particular ,recordar que siempre algo debe invocarla, para que se ejecute     

// DECLARADAS 
function saludar (){

}

//EXPRESADAS COMUN
let saludar2 = function(){

}

// tipo flecha
let saludar3 = () => {

}

//SCOPE >> Es el alcance  de mi variables
// GLOBAL >> Las variables se declaran despues de la funcion, teniendo asi un alcance a ellas en cualquier momento del codigo
// LOCAL >> Las varariables se declaran dentro de la funcion, con lo cual solo "funcionan" dentro de la misma, si las llamamos por fuera, esa funcion no existe

//--------------------------------------OPERADORES--------------------------------------------------------------// 

// OPERADORES >> Es una porcion de codigo que nos permite hace operaciones aritmeticas, comparaciones, concatenaciones entre otras cosas.

// OPERADORES ARITMETICOS

let numero1 = 11; 
let numero2 = 11;
// TIPO DE COMPARACION 
let comparacionSimple = numero1 == numero2 // COMPARA EL VALOR DEL DATO 
let comparacionEstricta = numero1 === numero2 // COMPARA el VALOR del dato y el TIPO de dato 
// TIPO DE DESIGUALDAD

let desigualdadSimple = numero1 != numero2; // COMPARA el VALOR
let desigualdadEstricta = numero1 !== numero2;// COMPARA EL VALOR Y TIPO DE DATO

// MAYOR O IGUAL >=
// MENOR O IGUAL <= 

// OPERADORES LOGICOS > Nos permiten unir sentencias de codigo que queremos usar

// AND >> && 
if ( numero1 && numero2 > 10){
    console.log("si numero 1 y numero 2 son mayores a 10, podes ver esto ") // USAMOS EL AND para preguntar por estas dos sentencias. para que se cumpla las 2 deben ser verdaderas
    // en el caso de que 1 de los dos numeros NO sea mayor a 10, la condicion NO SE CUMPLE
}

// OR || >> utilizamos el OR (||) para preguntar por varias sentencias a la vez, a diferencia del AND si 1 de las sentencias se cumple ya esta

if(numero1 || numero2 > 10){
    console.log("Si el numero 1 o el numero 2 ( alguno de los dos), es mayor a 10, vas a ver esto por consola ")
}


//--------------------------------------CONDICIONALES--------------------------------------------------------------// 

// CONDICIONALES > Nos permiten ejecutar un codigo  siempre que se cumpla una condicion 

// IF > dentro del () > va la condicion o condiciones que queres que se cumplan y luego dentro de los {} lo que queres ejecutar cuando esto se cumpla > ver ejemplo de arriba

// IF TERNARIO > Se escribe en 1 sola linea, es para probar 1 condicion, si es ejecuto algo y si no es ejecuto otra cosa

// IF TERNARIO >>> CONDICION ? codigo para cuando se cumple : Codigo para cuando no se cumple;  >> en el caso que no queremos que haga nada cuando no se cumple ponemos un "" 

let elMayor = numero1 > numero2 ? console.log("el numero 1 es mayor que el numero 2 "): console.log ("El numero 1 no es mayor que el numero 2");


//--------------------------------------Metodos ARRAYS --------------------------------------------------------------// 


// PUSH  > nos permite  agregar al final de un array un dato en particular  dentro de un ARRAY
let arrayMetodos = ["hola", "como"]; // DEFINIMOS UN ARRAY 
arrayMetodos.push("estas") // USAMOS EL PUSH PARA AGREGARLE ALGO, SE AGREGA AL FINAL

//console.log(arrayPush)



// POP > Nos permite sacar el ultimo elemento del ARRAY
let guardarPop = arrayMetodos.pop() // nos sacara el ultimo elemento del array, si lo ejecutamos varias veces podriamos ir sacando los elementos
// con el pop tambien podemos guardar ese valor que sacamos dentro de una variable. si no queremos hacerlo solamente usamos el arrayMetodos.pop()



// SHIFT > SACAMOS el primer ELEMENTO del array.
let arrayMetodos2 = [0, 1, 2, 3, 4, 5];
let guardarShift = arrayMetodos2.shift() // Nos saca el primer valor del array y al igual que el POP podemos ELEGIR si queremos guardarlo en una variable o no
console.log(guardarPop, guardarShift) // vemos los eleementos que sacamos y guardamos



// UNSHIFT > insertamos ELEMENTOS al comienzo del ARRAY.
let arrayMetodos3 = ["como","estas" ]
arrayMetodos3.unshift("hola","Maxi") // Podemos agregarle mas de un elemento.
console.log(arrayMetodos3) // vemos el array definitivo.


// INDEXOF > Se ejecuta sobre un array, INDICA el INDICE del elemento que estamos buscando, comienza a contar desde el indice 0 en adelante 
// en el caso de NO encontrar el elemento ARROJA UN -1
let arrayMetodos4 = ["Juan","Maria","Lucas"]
arrayMetodos4.indexOf("Maria") // Vemos el indice de MARIA 
console.log(arrayMetodos4.indexOf("Maria")) // para verlo por consola


// LASTINDEXOF > se ejecuta sobre una array INDICA el INDICE del elemento pero comienza de atras hacia adelante

// JOIN > Permite unificar todos los elementos de un array en un unico string. 
let arrayMetodo5 = ["Me","dicen","Maxi"]
arrayMetodo5.join() 
console.log(arrayMetodo5.join(" ")) // podemos pasarle dentro del JOIN con que vamos a separar los elementos, en este caso con un espacio


//--------------------------------------Metodos STRINGS --------------------------------------------------------------// 

// METODOS son funciones que pertenecen a un objeto, podemos consultar propiedades y ejecutar diversos metodos sobre un STRING.


// LENGH > DEVUELVE la longitud de una cadena de texto
let longitudTexto = "Quiero aprender JS"
longitudTexto.length; // >> lo ponemos en un console log para ver su longitud
console.log(longitudTexto.length) // devuelve 18, los espacios tambien cuentan


// LENGH 2 podemos ver tambien la longitud de un ARRAY
let longitudArray = ["plan a", "plan b","plan c"];
console.log(longitudArray.length) // En consola nos mostrara 3 ya que el array contiene 3 elementos dentro


// LENGH 3 podemos preguntar sobre la longitud de un elemento dentro de un ARRAY, recordemos que el INDICE del array comienza desde el numero 0, por lo que en nuestro array aterior
//vamos a tener 3 elementos y     "2 indices ( 0, 1, 2)"
let longitudElementoArray = longitudArray[0].length // PREGUNTAMOS cual es la longitud del elemento en el INDICE 0 dentro del array y lo almacenamos en una variable
console.log(longitudElementoArray) // MOSTRAMOS POR CONSOLA = 6(caracteres).



// INDEXOF > Se ejecuta sobre un string dado y recibe como parametro una cadena de texto, la cual se busca dentro del string 
// SI LO QUE BUSCA NO ESTA ARROJA UN -1 
// DEVUELVE el primer resultado que encuentre 
let text = `buscando palabra con index`
let buscandoConIndex = text.indexOf(`con`); 
console.log(buscandoConIndex) // ARROJA un 17 ya que la palabra "con" comieza en el espacio siguiente 



//SLICE > toma una porcion determinada de una cadena de texto 
//> recibe 2 parametros, el primero es el INDICE inicial y el segundo es el INDICE FINAL
let probandoSlice = "Voy a aprobar".slice(6,13)
console.log(probandoSlice) // MOSTRAME por consola desde INDICE 6 HASTA el indice 13(final) >> vemos por consola la palabra o la parte del string que le corresponde. 




// TRIM >> Elimina los espacios en blanco antes y despues  de la primera ocurrecia de un caracter alfanumerico 
let espacioSinEliminar = "   Hola, como estas?"
let espacioEliminado = espacioSinEliminar.trim() 
console.log(espacioSinEliminar) // CON espacio 
console.log(espacioEliminado)   // SIN espacio 



//SPLIT >> Me permite convertir un STRIN en un array
let miString = "este es mi string"
let miArray = miString.split(" ")
console.log(miArray)




// REPLACE >> permite reemplazar  una porcion de texto dentro de un string 
// RECIBE 2 parametros, primero el parametro que deseamos corregir y el segundo el parametro por el que lo vamos a reemplazar.
let presentacion = "Hola, tengo 10 años"
let remplazo = presentacion.replace("10","24")
console.log(remplazo)



//--------------------------------------OBJETOS--------------------------------------------------------------// 

//OBJETO > representacion de un objeto,persona o algo  en el codigo > puede tener PROPIEDADES Y METODOS
// PROPIEDAD > Definimos el nombre de la propiedad de un objeto, si hay mas de 1 se separan con una coma 
// VALOR > puede ser cualquier tipo de datos que conozcamos 
// FUNCION > Si una propiedad almacena una FUNCION >>>> LE LLAMAMOS METODO. >> Sera un metodo de ese objeto 

let alumno = {
    // aca tenemos propiedads del objeto y sus respectivos valores
    nombre : "Maximiliano",
    apellido: "Cattaneo Cvetic",
    registro: 891128,
    CuotaAlDia: true,
    // aca tenemos un METODO de la funcion
    presentarme: function(){
        return `Hola! mi nombre es ${this.nombre}` // USAMOS THIS para referirnos a el nombre del objeto 
    }
}
// PARA EJECUTAR  UN METODO DEL OBJETO USAMOS 
console.log (alumno.presentarme()) // >> usamos la funcion del objeto
console.log(alumno.apellido) // >> Mostramos el apellido del objeto



