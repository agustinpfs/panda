<em>[Editar este artículo en Github](# " target="_blank)</em>

# Bucle/ciclo(loop) For Javascript.

==Repite una acción tantas veces como que se lo indiquemos.==

*Sintaxis* `for (variable; condición; actualización) sentencia`

`variable` irá cambiando cada vez que se ejecute la sentencia. Por ejemplo: `var i = 0`, `var i = 1`, etc... 

`condición` es la instrucción de cómo y las veces que deberá repetirse.
Por ejemplo: `i < 9` *(mientras i sea menor que 9).*

`actualización` es para actualizar o incrementar la *variable*. Por ejemplo: `i++` *(suma de uno en uno)*, `i = i +2` *(suma de dos en dos)*.

`sentencia` es el bloque de código que se ejecuta cada vez que se repita el ciclo. Por ejemplo: `console.log(i)`.

**Código de ejemplo:**
Obtenemos 4 strings como resultado:

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
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



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/9d99c39e3fe84fc9c9ac86c19dd3569d
</code></pre>

<!-- end code snippet: -->

* Primero se ejecuta la *sentencia* (*linea 2* `console.log`) utilizando la variable inicial `var i = 1`. Se imprime el 1º resultado "`mensaje 1`".

* Luego comienzan los ciclos. 
  * *condición:* Cómo "i" es menor que "5" `i < 5` 
  * *actualización:* le sumamos "1" a la variable "i" `i++`.

* Ahora la variable ``i`` vale ``2`` `var i = 2` y se vuelve a ejecutar la sentencia `console.log()` e imprime el 2º resultado "``mensaje 2``". Y así sucesivamente hasta que "i" deje de ser menor que "5".

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
  <script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
  for(var i = 1; i < 5; i++) {
    console.log("mensaje" + i);
  }
</div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>

**Ejemplo bucle/ciclo(loop) "for" para obtener los resultados en un solo string:**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">

var num = ""

for (var i = 0; i < 5; i++) {
    num += "número" + i + ", ";
}

console.log(num);

// Resultado:
// número0, número1, número2, número3, número4,



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/4409fae7d30b8cf469e88680d8e6ece9
</code></pre>

<!-- end code snippet: -->


Vemos que asignamos un string vacío a la variable "num" *(linea 1)*.

Luego en la linea 4 `num` y los operadores `+=` hará que los resultados de la expressión `"número" + i + ", "` vayan sumandose al string vacío `var num = ""` *(linea 1)*.

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-ele" >
  <script src="https://embed.tonicdev.com" data-element-id="my-ele" ></script>       
  var num = ""

  for (var i = 0; i < 5; i++) {
      num += "número" + i + ", ";
  }

  console.log(num);
</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>
</div>

<hr>

**Ejemplo bucle/ciclo(loop) "for" para manipular los elementos de un array**

Tengamos en cuenta:

`length` Devuelve el número de elementos del array (*estaciones.length será igual a 4*).

`estaciones[0]` devuelve el 1º elemento (otoño). 

`estaciones[1]` devuelve el 2º elemento (invierno), etc... 

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var estaciones = ["otoño", "invierno", "primavera", "verano"];
var text = "";

for (var i = 0; i < estaciones.length; i++) {
    text += ( i + 1 + " " ) + estaciones[i] + ", ";
};

console.log(text);

// Resultado:
// 1 otoño, 2 invierno, 3 primavera, 4 verano, 



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/d5b84253dc4ae01be7b72b38ab35a36b
</code></pre>

<!-- end code snippet: -->
<button class="post-content_button-console3">Prueba el código ahora mismo</button>

<div class="post-content_console3">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
  <script src="https://embed.tonicdev.com" data-element-id="my-el" >
  </script>       
  var estaciones = ["otoño", "invierno", "primavera", "verano"];
  var text = "";

  for (var i = 0; i < estaciones.length; i++) {
      text += ( i + 1 + " " ) + estaciones[i] + ", ";
  };

  console.log(text);
</div>

<span class="post-content_buttonx-console3"><small>close</small>x</span>
</div>

**Ejemplo Uso de Array sort() en Página Web.**
(click en Result para ver el resultado)


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

**Enlaces relacionados:**

[*Enlaces relacionados*](#)

<em>[Editar este artículo en Github](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/constructor-javascript">anterior</a>
    <i>constructor javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/if-else-javascript">siguiente</a>
    <i>if-else javascript</i>
  </div>
</div>
<hr>

<div id="disqus_thread"></div>

<script>
/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
/*
var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = '//pandawebs.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>