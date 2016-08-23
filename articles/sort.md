## Método Array sort() Javascript.

Ordena los elementos de un array alfabeticamente según su valor [Unicode](#). Es decir, ordenará 1º los números o strings que comienzen por números, luego las mayúsculas, luego las minúsculas.

*Sintaxis*
*```
array.sort(funcionComparacion)
```*

`array.sort` Ordena los elementos según su valor [Unicode](#).
`funcionComparacion` Opcional. Sirve para crear una sentencia para personalizar el orden.

**Ejemplo sin `funcionComparacion`:**

<script src="https://gist.github.com/agustinpfs/a31ff29d6cd1fd6591b677041771afaf.js"></script>

<!-- Código del Gist: 

var ejemplo = ["casa", "auto", 2, 1, "Ropa"];
ejemplo.sort();

console.log(ejemplo);

// Resultado:
// [ 1, 2, 'Ropa', 'auto', 'casa' ]

-->

> Para conseguir un orden descendente agregamos a `ejemplo.sort()` el método reverse `ejemplo.sort().reverse()`

[Prueba el código!](https://jsfiddle.net/Pandawebs/gexxnpb3/){:target="_blank"}

Como sort convierte los valores a strings no sirve para ordenar números. "100" se ordenará primero que "25" ya que cuenta el primer caracter, y 1 está antes que 2.

Para ordenar números agregaremos una **función de comparación** que pueda retornar 1, 0 ó -1 . El método sort con esta función irá comparando de 2 en 2 los elementos. Si el resultado de la comparación es negativo(-1), el primer elemento comparado deberá acomodarse en una posisión anterior al segundo elemento comparado. Si es 0, no habrá cambios. Y si es positivo(1), el segundo elemento comparado deberá acomodarse en una posisión anterior a el primer elemento comparado.


<script src="https://gist.github.com/agustinpfs/15b135562eb2fe9c1d24cd5ec0870b43.js"></script>

<!-- Código del Gist: 

var numbers = [4, 2, 5, 9, 9, 1];
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

// Resultado:
// [ 1, 2, 4, 5, 9, 9 ]

-->

Este script compara varias veces de a dos en dos los elementos del array y los acomoda según el resultado negativo(-1), cero(0) positivo(1).

> Para conseguir un orden descendente en vez de `return a - b` pondremos `return b -a`

[Prueba el código!](https://jsfiddle.net/Pandawebs/j9acfjpe/){:target="_blank"}


Nota: la declaración de la función de comparación puede ser cualquiera, siempre y cuando el resultado pueda ser positivo, negativo o igual para que pueda hacer la comparación y efectuarse el orden.
<hr>

Para aclarar el funcionamiento de la función de comparación, agregaremos un console.log que nos imprimirá las veces que se llama a la función y a que elementos se les asignan los parametros a o b respectivamente.

<script src="https://gist.github.com/agustinpfs/1f007fb5625dec6a31949440b13b9b32.js"></script>

<!-- Código del Gist: 

var numbers = [4, 2, 5, 9, 9, 1];
numbers.sort(function(a, b) {
  console.log( "comparando " + "a:" + a + " y b:" + b );

  return a - b;

});
console.log(numbers);

// Resultado, 9 comparaciones:

// comparando a:4 y b:2
// comparando a:4 y b:5
// comparando a:5 y b:9
// comparando a:9 y b:9
// comparando a:9 y b:1
// comparando a:9 y b:1
// comparando a:5 y b:1
// comparando a:4 y b:1
// comparando a:2 y b:1
// [ 1, 2, 4, 5, 9, 9 ]

-->
[Prueba el código!](https://jsfiddle.net/Pandawebs/3z03awqL/){:target="_blank"}

<hr>
**En una Página web:**
<script async src="https://jsfiddle.net/Pandawebs/3yLe74w9/embed/html,result/"></script>



