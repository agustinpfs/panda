## Método Splice.

El método splice agrega o quita elementos de un array.

*Sintaxis*
*```array.splice(inicio, eliminar, nuevo,.....,nuevo)```*

Parametros:

* `inicio` (requerido) Indica a partir de que elemento se iniciará el cambio(eliminar o agregar).
* `eliminar` (requerido) Indica el número de elementos a eliminar.
* `nuevo` (opcional) Son los nuevos elementos que añadiremos al array.

*`Splice no crea un nuevo array. Modifica el original`*

**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/327294a521692bf46d80dff9453ebe53.js"></script>

<!-- Código del Gist:

var paisaje = ["montaña", "rio", "cielo", "bosque"];
paisaje.splice(2, 1, "mar", "playa");

console.log(paisaje);

// Resultado:
// [ "montaña", "rio", "mar", "playa", "bosque" ] -->

* En el array original(linea 1):

	* `montaña` -> posisión 0
	* `río` -> posisión 1
	* `cielo` -> posisión 2

* En la linea 2 `paisaje.splice(` _**`2, 1`**_	 `, "mar", "playa")` indicamos: Ir a la posisión _**2**_ (cielo) y eliminar _**1**_ elemento a partir de esa posisión(incluída) que sería cielo. Luego que agrege mar y playa en esa misma posisión.

__**Despejemos dudas agregando conectores al código:**__


![alt text][logo]

[logo]: splice.png "Constructor Objetos Javascript"


Si queremos solo agregar y no borrar, el segundo parámetro será 0.
**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/6565f6dfef11e7e12d55c225a284cdc1.js"></script>

<!-- Código del Gist:

var paisaje = ["montaña", "rio", "cielo", "bosque"];
paisaje.splice(2, 0, "mar", "playa");


console.log(paisaje);

// Resultado:
// [ "montaña", "rio", "mar", "playa", "cielo", "bosque" ] -->

Si usamos valores negativos comienzamos a contar desde el final.

**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/8b261ecd0a0411825a01f747bdc21c07.js"></script>

<!-- Código del Gist:

var paisaje = ["montaña", "rio", "cielo", "bosque"];
paisaje.splice(-1, 0, "mar", "playa");


console.log(paisaje);

// Resultado:
// [ 'montaña', 'rio', 'cielo', 'mar', 'playa', 'bosque' ] -->

* `bosque` -> posisión 0
* `cielo` -> posisión -1

A partir de la posisión -1(incluída) son insertados los nuevos elementos(mar y playa).



[Prueba el código!](https://jsfiddle.net/Pandawebs/xxtjat9u/){:target="_blank"}

<hr>

**En una página web**

<script async src="https://jsfiddle.net/Pandawebs/0s6t6rtg/embed/html,result/"></script>

<hr>

[*`Lista de métodos nativos`*](#)