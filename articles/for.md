## Bucle/ciclo(loop) For Javascript.
Repite una acción tantas veces como que se lo indiquemos.

*Sintaxis*
*```
for (variable; condición; actualización) sentencia
```*


* `variable` irá cambiando cada vez que se ejecute la sentencia. Por ejemplo: `var i = 0`, `var i = 1`, etc... 

* `condición` es la instrucción de cómo y las veces que deberá repetirse.
Por ejemplo: `i < 9` *(mientras i sea menor que 9).*

* `actualización` es para actualizar o incrementar la *variable*. Por ejemplo: `i++` *(suma de uno en uno)*, `i = i +2` *(suma de dos en dos)*.

* `sentencia` es el bloque de código que se ejecuta cada vez que se repita el ciclo. Por ejemplo: `console.log(i)`.

**Código de ejemplo:**
> Obtenemos 4 strings como resultado:

<script src="https://gist.github.com/agustinpfs/9d99c39e3fe84fc9c9ac86c19dd3569d.js"></script>

<!-- Código del Gist:

for(var i = 1; i < 5; i++) {
  console.log("mensaje" + i);
}

/* 
Resultado:
mensaje 1
mensaje 2
mensaje 3
mensaje 4
*/

-->


* Primero se ejecuta la *sentencia* (*linea 2* `console.log`) utilizando la variable inicial `var i = 1`. Se imprime el 1º resultado "`mensaje 1`".

* Luego comienzan los ciclos. 
	* *condición:* Cómo "i" es menor que "5" `i < 5` 
	* *actualización:* le sumamos "1" a la variable "i" `i++`.

* Ahora la variable ``i`` vale ``2`` `var i = 2` y se vuelve a ejecutar la sentencia `console.log()` e imprime el 2º resultado "``mensaje 2``". Y así sucesivamente hasta que "i" deje de ser menor que "5".

[Prueba el código!](https://jsfiddle.net/Pandawebs/b13sypda/){:target="_blank"}


<hr>

**Ejemplo bucle/ciclo(loop) "for" para obtener los resultados en un solo string:**
<script src="https://gist.github.com/agustinpfs/4409fae7d30b8cf469e88680d8e6ece9.js"></script>

<!-- Código del Gist:

var num = ""

for (var i = 0; i < 5; i++) {
    num += "número" + i + ", ";
}

console.log(num);

// Resultado:
// número0, número1, número2, número3, número4,

-->

Vemos que asignamos un string vacío a la variable "num" *(linea 1)*.

Luego en la linea 4 `num` y los operadores `+=` hará que los resultados de la expressión `"número" + i + ", "` vayan sumandose al string vacío `var num = ""` *(linea 1)*.


[Prueba el código!](https://jsfiddle.net/Pandawebs/ak43g445/){:target="_blank"}

<hr>

**Ejemplo bucle/ciclo(loop) "for" para manipular los elementos de un array**
Tengamos en cuenta:
`length` Devuelve el número de elementos del array (*estaciones.length será igual a 4*).
`estaciones[0]` devuelve el 1º elemento (otoño). `estaciones[1]` devuelve el 2º elemento (invierno), etc... 

<script src="https://gist.github.com/agustinpfs/d5b84253dc4ae01be7b72b38ab35a36b.js"></script>

<!-- Código del Gist:

var estaciones = ["otoño", "invierno", "primavera", "verano"];
var text = "";

for (var i = 0; i < estaciones.length; i++) {
    text += ( i + 1 + " " ) + estaciones[i] + ", ";
};

console.log(text);

// Resultado:
// 1 otoño, 2 invierno, 3 primavera, 4 verano, 

-->

[Prueba el código!](https://jsfiddle.net/Pandawebs/1p4bwcc6/){:target="_blank"}


**En una página web:**

<!-- jsfiddle: -->
<script async src="https://jsfiddle.net/Pandawebs/0myb8qo8/embed/html,result/"></script>

<!-- Código del jsfiddle:
<!DOCTYPE html>
<html>
  <body>

    <p id="demo">otoño invierno primavera verano</p>

    <button onclick="miFuncion()">Agregar Estación y número</button>

    <script>
      function miFuncion() {

        var estaciones = ["otoño", "invierno", "primavera", "verano"];
        var text = "";

        for (var i = 0; i < estaciones.length; i++) {
         text += ("Estación " + (i + 1) + ": ") + estaciones[i] + ". ";
        };

        document.getElementById("demo").innerHTML = text;
      }

    </script>

  </body>
</html>
-->


<hr>

[*`Lista de métodos nativos`*](#)