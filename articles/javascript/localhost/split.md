<span class="hidden-excerpt">Método Split() en Javascript. Definición - Uso - Ejemplos - Video tutorial.</span>

<div class="post-content_next">
  <a href="http://localhost:2368/constructor-de-objetos-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>constructor javascript</span>
  </div>
  <a href="http://localhost:2368/metodo-splice-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método splice()</span>
    </div>
  </a>
</div>


<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-split-javascript.md " target="_blank)</strong>


# Método String split() Javascript.

*Método Split() en Javascript. Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<hr>

__==El método split() divide un string y las divisiones resultantes pasan a ser los elementos de un nuevo array.==__

*Sintaxis:*

`string.split(separador,límite)`

* El parámetro `separador`(opcional) indica en donde debe hacerse la división, puede ser un caracter(entre comillas) o una [expresión regular(regex)](#).

* El parámetro `límite`(opcional) indica un límite en la cantidad de divisiones en el nuevo array.

* Si no ponemos parámetros, devolverá un array con un solo elemento.

**Ejemplo:**
<pre data-start="0"><code class="line-numbers language-javascript">
var cadena = "Analizando el funcionamiento de split";
var resultado = cadena.split(" ");

console.log(resultado);

// Resultado:
// [ "Analizando", "el", "funcionamiento", "de", "split" ] 

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/1df3f622525752d3fcd7a120477b40b8
</code></pre>


En el ejemplo utilizamos solo el parámetro separador indicando que la división se realize en cada espacio.

Si lo dejaramos vacío ("") haría la división en cada caracter.

Si colocaramos una letra, por ejemplo ("i"), haría la división en cada letra i __sin incluírla__.

Con el parámetro límite. Ejemplo (" ", 2), nos devuelve un array con los 2 primeros elementos.

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
<script src="https://embed.tonicdev.com" data-element-id="my-el" ></script>       
var cadena = "Analizando el funcionamiento de split";
var resultado = cadena.split(" ");

console.log(resultado);
    </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>
<br>
**Ejemplo de uso en una Página Web**
(click en Result para ver el resultado)

<div class="Post-jsfiddle">
  <script async src="https://jsfiddle.net/Pandawebs/u3v2zt7a/embed/html,result/">
  </script>
</div>

<hr>

<br>

<!-- [*Lista de métodos nativos*](#) -->

<hr>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-split-javascript.md " target="_blank)</strong>

<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/constructor-de-objetos-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>constructor javascript</span>
  </div>
  <a href="http://localhost:2368/metodo-splice-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método splice()</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Métodos Javascript](http://localhost:2368/metodos-javascript/)

[Método splice()](http://localhost:2368/metodo-splice-javascript/)
