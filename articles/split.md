## Método Split.

Divide un string y las divisiones resultantes pasan a ser los elementos de un nuevo array.

*Sintaxis*
*```array.split(separador,límite)```*

* El parámetro separador(opcional) indica en donde debe hacerse la división, puede ser un caracter(entre comillas) o una [expresión regular(regex)](#).
* El parámetro límite(opcional) indica un límite en la cantidad de divisiones en el nuevo array.
* Si no ponemos parámetros, devolverá un array con un solo elemento.

**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/1df3f622525752d3fcd7a120477b40b8.js"></script>

<!-- Código del Gist:

var cadena = "Analizando el funcionamiento de split";
var resultado = cadena.split(" ");

// Resultado:
// [ "Analizando", "el", "funcionamiento", "de", "split" ] -->

En el ejemplo utilizamos solo el parámetro separador indicando que la división se realize en cada espacio.
Si lo dejaramos vacío ("") haría la división en cada caracter.
Si colocaramos una letra, por ejemplo ("i"), haría la división en cada letra i __sin incluírla__.
Con el parámetro límite. Ejemplo (" ", 2), nos devuelve un array con los 2 primeros elementos.

[Prueba el código](https://jsfiddle.net/Pandawebs/azab96ok/){:target="_blank"}

<hr>

**En una página web:**

<script async src="https://jsfiddle.net/Pandawebs/u3v2zt7a/embed/html,result/"></script>

<hr>

[*`Lista de métodos nativos`*](#)

