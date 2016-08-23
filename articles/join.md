## Método Array join() Javascript.

Une cada elemento del array en nuevo string separados por el o los caracteres que le indiquemos.

*Sintaxis*
*```array.join(separator)```*

**Ejemplo:**
Array:
`var arboles = ["ombú", "palmera", "pino", "algarrobo"];`
<hr>

separados por un espacio:
`arboles.join(" ");`

resultado:
`ombú palmera pino algarrobo`
<hr>

separados por una coma(por defecto):
`arboles.join();`

resultado:
`ombú,palmera,pino,algarrobo`
<hr>

separados por una coma y un espacio:
`arboles.join(", ");`

resultado:
`ombú, palmera, pino, algarrobo`
<hr>

Sin separador
`arboles.join("");`

resultado:
`ombúpalmerapinoalgarrobo`

**Código:**
<script src="https://gist.github.com/agustinpfs/bb851df1a656c60e8f4def8e64c8bde4.js"></script>

<!-- Código del Gist:

var arboles = ["ombú", "palmera", "pino", "algarrobo"];
var res = arboles.join(" ");

console.log(res);

// Resultado
// ombú palmera pino algarrobo

-->
<!-- jsfiddle: -->
[Prueba el código!](https://jsfiddle.net/Pandawebs/ohv2er3w/){:target="_blank"}

<!-- Código del jsfiddle:

// CLICK EN RUN PARA VER EL RESULTADO
var arboles = ["ombú", "palmera", "pino", "algarrobo"];
// Prueba utilizando otros caracteres:
var res = arboles.join(" ");


var mostrar = (res);


// CÓDIGO PARA MOSTRAR EL RESULTADO:
document.getElementById("demo").innerHTML =  mostrar

-->
<hr>
**En una página web:**

<!-- jsfiddle: -->
<script async src="https://jsfiddle.net/Pandawebs/n1dt1d27/embed/html,result/"></script>

<!-- Código del jsfiddle:

<!DOCTYPE html>
<html>
  <body>

    <p id="demo">ombú, palmera, pino, algarrobo</p>

    <button onclick="miFuncion()">Separar con guiones</button>


    <script>
      function miFuncion() {
        var arboles = ["ombú", "palmera", "pino", "algarrobo"];
        var x = document.getElementById("demo");
        x.innerHTML = arboles.join(" - ");
      }

    </script>

  </body>
</html>

-->

<hr>

[*`Lista de métodos nativos`*](#)
