<em>[Editar este artículo](# " target="_blank)</em>

# Método String replace() JavaScript

==El método replace() busca un valor o una [expresión regular(regex)](#) en un string y lo reemplaza con un valor nuevo o una [función](#) que modifique los valor encontrados.==

*Sintaxis*
*```string.replace(ValorAreemplazar, nuevoValor)```*

**Ejemplo:**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var texto = "Mi nombre es Agustín";
var resultado = texto.replace("Agustín", "Lucas");

console.log(resultado);

// Resultado:
// Mi nombre es Lucas



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/17312a22e625d922d4ea3b941fdb7a9a
</code></pre>

<!-- end code snippet: -->


Tengamos en cuenta que el primer argumento(buscarValor) si no es una [expresión regular(regex)](#) sólo reemplazará el **primer** elemento que coincida.

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var texto = "Agustín. Mi nombre es Agustín";
var resultado = texto.replace("Agustín", "Lucas");

console.log(resultado);

// Resultado:
// Lucas. Mi nombre es Agustín


// (Vemos que sólo reemplaza el 1º Agustín del string)


//------------------------------------------------
// ver cómo Gist en Github  -->> hacerlo!!!!!
</code></pre>

<!-- end code snippet: -->


**Usando expresión regular(regex)**
Para que reemplaze todos los elementos que coincidan, usaremos una [expresión regular(regex)](#) con el modificador global(g).

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var texto = "Agustín. Mi nombre es Agustín";
var resultado = texto.replace(/Agustín/g, "Lucas");

console.log(resultado);

// Resultado:
// Lucas. Mi nombre es Lucas



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/17ff6d9722d0d3ec53d9084d26dedcca
</code></pre>

<!-- end code snippet: -->
<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
<script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
var texto = "Agustín. Mi nombre es Agustín";
var resultado = texto.replace(/Agustín/g, "Lucas");

console.log(resultado);
    </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

**Usando una función para modificar los elementos de búsqueda**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var frase = "No te des por vencido. jamás nunca";
var modifica = function myFuncion(x) {
  return x.toUpperCase() + "!!!";
};
var resultado = frase.replace(/jamás|nunca/g, modifica);

console.log(resultado);

// Resultado:
// No te des por vencido. JAMÁS!!! NUNCA!!!



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/17ff6d9722d0d3ec53d9084d26dedcca
</code></pre>

<!-- end code snippet: -->

[*Lista de métodos nativos*](#)

<em>[Editar este artículo](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/join-javascript">anterior</a>
    <i>join javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/sort-javascript">siguiente</a>
    <i>sort javascript</i>
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





