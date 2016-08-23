## Método Slice.
Este método existe tanto para el objeto String como para el objeto Array.
#### Array slice()

*Sintaxis*
*```array.slice(inicio,final)```*

Copia una porción de los elementos de un array en un nuevo array(no modifica el original).
La copia se indica entre 2 argumentos(inicio y final).

Vamos a crear un nuevo array copiando las frutas cítricas del siguiente array:

<script src="https://gist.github.com/agustinpfs/d144690cb07b05fe576a9ea9b3b5ab89.js"></script>

* La primera posisión del array es el 0*(Banana)*.
* Las cítricas son la naranja y el limón, necesitamos copiar en un nuevo array el elemento 1*(Naranja)* y el elemento 2*(Limón)*.
* Tengamos en cuenta que las posisiones que indiquemos incluye la del inicio y no incluye la del final.
* Es decir: `frutas.slice(1, 3)` copia desde la posisión 1*(Naranja)* que se incluye, hasta la posisión 3*(Manzana)* que no se incluye.
* Resultado:  `["Naranja", "Limón"]`.
<hr>

Si ponemos un sólo número como argumento será tomado como el primer argumento(inicio) y copiará hasta el final del array.

`fruits.slice(3)`

_Resultado_:

`["Manzana", "Mango"]`
<hr>
#### Argumentos negativos.
* Si son números negativos el inicio comenzará en el final.

*Sintaxis negativos*:
*```array.slice(final, inicio)```*

Ejemplo:
`var frutas = ["Banana", "Naranja", "Limón", "Manzana", "Mango"];`

* Mango será la posisión 0, Manzana -1, etc...

* Por ejemplo `fruits.slice(-3, -1)` creará el siguiente array:

```["Limón", "Manzana"]```


Si ponemos un sólo número negativo como argumento lo tomará como el argumento final, siendo 0 el valor por defecto inicial.

`
fruits.slice(-3)` creará un nuevo array con los elementos desde la posisión 0(Mango) a la -3(Naranja - no incluído):

```["Limón", "Manzana", "Mango"]```

<hr>
Inicial positivo. Final negativo:

`
fruits.slice(1, -3)` creará el array:

`
["Naranja"]`

[Prueba el código](https://jsfiddle.net/Pandawebs/ubvg9vmh/){:target="_blank"}
<hr>
##### Ejemplo Uso de Array slice() en Página Web.
Utilizamos *getElementById* e *innerHTML* para mostrar el resultado luego de hacer clic en un botón.
(click en Result para ver el resultado)

<iframe width="100%" height="650" src="https://jsfiddle.net/Pandawebs/deseevm6/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<hr>

#### String slice()

Funciona igual que Array slice() pero con strings.

<script src="https://gist.github.com/agustinpfs/2c959f98762b0985a17bb0cdf0d504d7.js"></script>



[Prueba el código](#){:target="_blank"}

<hr>
##### Ejemplo Uso de String slice() en Página Web.
Utilizamos *getElementById* e *innerHTML* para mostrar el resultado luego de hacer clic en un botón.
(click en Result para ver el resultado)

<iframe width="100%" height="500" src="https://jsfiddle.net/Pandawebs/La8o9xxm/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



[*`Lista de métodos nativos`*](#)





