<em>[Editar este artículo en Github](# " target="_blank)</em>

# Método Array join() Javascript.

==Une cada elemento del array en nuevo string separados por el o los caracteres que le indiquemos.==

**Sintaxis:**
`array.join(separator)`

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

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var arboles = ["ombú", "palmera", "pino", "algarrobo"];
var res = arboles.join(" ");

console.log(res);

// Resultado
// ombú palmera pino algarrobo


//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/bb851df1a656c60e8f4def8e64c8bde4
</code></pre>

<!-- end code snippet: -->

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-ele" >
  <script src="https://embed.tonicdev.com" data-element-id="my-ele" ></script>       
    var arboles = ["ombú", "palmera", "pino", "algarrobo"];
    var res = arboles.join(" ");

    console.log(res);
</div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>

**Ejemplo Uso de Array join() en Página Web.**
(click en Result para ver el resultado)

<!-- jsfiddle: -->
<script async src="https://jsfiddle.net/Pandawebs/n1dt1d27/embed/html,result/">
</script>

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

[*Lista de métodos nativos*](#)

<em>[Editar este artículo en Github](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/map-javascript">anterior</a>
    <i>map javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/replace-javascript">siguiente</a>
    <i>replace javascript</i>
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
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
