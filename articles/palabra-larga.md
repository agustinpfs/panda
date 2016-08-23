
## Encontrar la palabra más larga de un string.
### Ejemplo Algoritmo Javascript.
**Practicaremos:**

* [Método Array split()](#)
* [Propiedad Array length](#)
* [Ciclo For](#)
* [Condicional If](#)

> Si no tienes claro estos conceptos te animo a que revises sus tutoriales.

**Código:**

> Nos devuelve el apellido de mayor longitud: `Villalobos`

<script src="https://gist.github.com/agustinpfs/f5589a087820b6adc063643fff0102af.js"></script>

<!-- Código del Gist:

var texto = 'Aguilera Pedraza Villalobos Zamorano';

function palabraMasLarga(texto) {
	var palabra = texto.split(' ');
	var resultado = "";
	
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i].length > resultado.length) {
			resultado = palabra[i];
		};
	};
	  return resultado;
};

console.log(palabraMasLarga(texto));

// Resultado:
// Villalobos

-->

1. A la variable texto le asignamos el string con las palabras en que se realizará la búsqueda. En este ejemplo usamos apellidos.
 **linea 1** `var texto = 'Aguilera Pedraza Villalobos Zamorano'`

2. Creamos la función `palabraMasLarga` y le asignamos la variable `texto`.
**linea3** `function palabraMasLarga(texto) {
			}`

3. Debemos convertir las palabras en elementos de un array para poder [iterar](#) sobre ellas. Para ello utilizamos [split](#) indicándole donde se hará la división. En este caso usamos los espacios en blanco ya que es lo que divide las palabras. Lo hacemos con un espacio entre comillas `split(' ')`.
**linea4** `var palabra = texto.split(' ')`

4. A raiz del paso anterior la variable `palabra` se le asigna el array: `[ 'Aguilera', 'Pedraza', 'Villalobos', 'Zamorano' ]`.

5. Creamos la variable resultado y le asignamos un string vacío donde se alojará el resultado *(la palabra más larga)*.
**linea 5**. `var resultado = ""`

6. Ahora necesitamos ir sobre cada palabra comprobando si es más larga que la anterior. Para ello vamos a iterar sobre el array palabra usando el tipo de ciclo "for".
	**linea 5** `for (var i = 0; i < palabra.length; i++) { }`

	* La cantidad de ciclos lo determina la longitud del array calculado por length. En el ejemplo sería igual a 4.
	**linea 5** `palabra.length` = 4 *(elementos del array)*

	* Necesitamos contar desde la posisión 0 ("Aguilera"). Por esta razón a la variable i le asignaremos 0.
	**linea 5** `var i = 0`

7. La declaración if determinará si la palabra actual del ciclo es mas larga que la anterior. 
**linea 8** `if (palabra[i].length > resultado.length)`
	* Si la condición es verdadera, a la palabra actual del ciclo se le asignará a la variable resultado suplantando al valor anterior.
	**linea 9** `resultado = palabra[i]` y **linea 5** `var resultado = ""`

> La variable resultado cambiará de string vacío (`""`) a `"Aguilera"` a `"Villalobos"`. 
`"Pedraza"` y `"Zamorano"` nunca serán valor de la variable resultado porque no cumple la condición de la condicional "if".

10. Para obtener el resultado, antes de cerrar la función retornamos la variable resultado:
**linea 12** `return resultado`

11. Para mostrar el resultado hacemos un `console.log` llamando a la función "palabraMasLarga":
**linea 15** `console.log(palabraMasLarga(texto))`

<hr>

**`Despejemos dudas agregando conectores de colores al código:`**
<br>


![alt text][encuentra palabra mas larga javascript]

[encuentra palabra mas larga javascript]: algoritmo-palabra-larga.png "encuentra palabra mas larga javascript"

[Prueba el código!](https://jsfiddle.net/Pandawebs/7t4sL39e/){:target="_blank"}

<hr>

**Veamos como podemos usar éste algoritmo en una aplicación web**

<script async src="https://jsfiddle.net/Pandawebs/b4g4zjeb/embed/html,result/"></script>