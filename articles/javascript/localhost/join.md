<span class="hidden-excerpt">Método join() en Javascript. Definición - Uso - Ejemplos - Video tutorial.</span>

<div class="post-content_next">
  <a href="http://localhost:2368/metodo-map-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método map()</span>
  </div>
  <a href="http://localhost:2368/metodo-replace-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método replace()</span>
    </div>
  </a>
</div>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-join-javascript.md " target="_blank)</strong>

# Método Array join() Javascript.

*Método join() en Javascript. Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<hr>

__==Une cada elemento de un array en un nuevo string, separados por el o los caracteres que le indiquemos.==__

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

<div class="Post-jsfiddle">
  <script async src="https://jsfiddle.net/Pandawebs/n1dt1d27/embed/html,result/">
  </script>
</div>

<hr>

<!-- [*Lista de métodos nativos*](#) -->

<br>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-join-javascript.md " target="_blank)</strong>

<hr>

<div class="post-content_next">
  <a href="http://localhost:2368/metodo-map-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método map()</span>
  </div>
  <a href="http://localhost:2368/metodo-replace-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método replace()</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Métodos Javascript](http://localhost:2368/metodos-javascript/)

[Método reduce()](http://localhost:2368/metodo-split-javascript/)
