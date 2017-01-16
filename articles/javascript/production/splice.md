<span class="hidden-excerpt">Método Splice() en Javascript. Definición - Uso - Ejemplos - Video tutorial.</span>

<div class="post-content_next">
  <a href="http://pandawebs.net/metodo-split-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método split()</span>
  </div>
  <a href="http://pandawebs.net/metodo-slice-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método slice()</span>
    </div>
  </a>
</div>


<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://pandawebs.net/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-splice-javascript.md " target="_blank)</strong>


# Método Array splice() Javascript.

*Método Splice() en Javascript. Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<hr>

__==El método splice() agrega o quita elementos de un array.==__

*Sintaxis:*

`array.splice(inicio, eliminar, nuevo,.....,nuevo)`

Parametros:

* `inicio` (requerido) Indica a partir de que elemento se iniciará el cambio(eliminar o agregar).

* `eliminar` (requerido) Indica el número de elementos a eliminar.

* `nuevo` (opcional) Son los nuevos elementos que añadiremos al array.

==*Splice no crea un nuevo array. Modifica el original*==

**Ejemplo:**

<pre data-start="0"><code class="line-numbers language-javascript">
var paisaje = ["montaña", "rio", "cielo", "bosque"];
paisaje.splice(2, 1, "mar", "playa");

console.log(paisaje);

// Resultado:
// [ "montaña", "rio", "mar", "playa", "bosque" ]

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/327294a521692bf46d80dff9453ebe53
</code></pre>

* En el array original(linea 1):

  * `montaña` -> posisión 0

  * `río` -> posisión 1

  * `cielo` -> posisión 2

* En la linea 2 `paisaje.splice(2, 1, "mar", "playa")` indicamos: Ir a la posisión _**2**_ (cielo) y eliminar _**1**_ elemento a partir de esa posisión(incluída) que sería cielo. Luego que agrege mar y playa en esa misma posisión.

<hr>

**Despejemos dudas agregando conectores al código:**

![alt](http://pandawebs.net/assets/images/splice.png)

<hr>

Si queremos solo agregar y no borrar, el segundo parámetro será 0.
**Ejemplo:**

<pre data-start="0"><code class="line-numbers language-javascript">
var paisaje = ["montaña", "rio", "cielo", "bosque"];
paisaje.splice(2, 0, "mar", "playa");


console.log(paisaje);

// Resultado:
// [ "montaña", "rio", "mar", "playa", "cielo", "bosque" ] -->

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/6565f6dfef11e7e12d55c225a284cdc1
</code></pre>


Si usamos valores negativos comienzamos a contar desde el final.

**Ejemplo:**

<pre data-start="0"><code class="line-numbers language-javascript">
var paisaje = ["montaña", "rio", "cielo", "bosque"];
paisaje.splice(-1, 0, "mar", "playa");


console.log(paisaje);

// Resultado:
// [ 'montaña', 'rio', 'cielo', 'mar', 'playa', 'bosque' ]

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/6565f6dfef11e7e12d55c225a284cdc1
</code></pre>

* `bosque` -> posisión 0

* `cielo` -> posisión -1

A partir de la posisión -1(incluída) son insertados los nuevos elementos(mar y playa).

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
  <script src="https://embed.tonicdev.com" data-element-id="my-el" ></script>       
  var paisaje = ["montaña", "rio", "cielo", "bosque"];
  paisaje.splice(2, 0, "mar", "playa");

  console.log(paisaje);
</div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>

**Ejemplo de uso en una Página Web**
(click en Result para ver el resultado)

<div class="Post-jsfiddle">
  <script async src="https://jsfiddle.net/Pandawebs/0s6t6rtg/embed/html,result/">
  </script>
</div>

<hr>

<!-- [*Lista de métodos nativos*](#) -->

<br>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://pandawebs.net/tutoriales-javascript/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-splice-javascript.md " target="_blank)</strong>

<hr>

<div class="post-content_next">
  <a href="http://pandawebs.net/metodo-split-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método split()</span>
  </div>
  <a href="http://pandawebs.net/metodo-slice-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método slice()</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Métodos Javascript](http://pandawebs.net/metodos-javascript/)

[Método slice()](http://pandawebs.net/metodo-splice-javascript/)
