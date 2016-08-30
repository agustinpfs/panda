<em>[Editar este artículo en Github](# " target="_blank)</em>

# Método String split() Javascript.

==Divide un string y las divisiones resultantes pasan a ser los elementos de un nuevo array.==

*Sintaxis:*

`array.split(separador,límite)`

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
<script async src="https://jsfiddle.net/Pandawebs/u3v2zt7a/embed/html,result/">
</script>

<hr>

<br>

[*Lista de métodos nativos*](#)

<em>[Editar este artículo en Github](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/constructor-de-objetos-javascript">anterior</a>
    <i>constructor javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/splice-javascript">siguiente</a>
    <i>splice javascript</i>
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
