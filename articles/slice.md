<em>[Editar este artículo en Github](# " target="_blank)</em>

# Método slice() Javascript.

Este método existe tanto para el Objeto Array como para el [Objeto String](#).

### Método Array slice().

*Sintaxis:*

`array.slice(inicio,final)`

==Copia una cantidad de elementos de un array en un nuevo array(no modifica el original).==

La copia se indica entre 2 argumentos(inicio y final).

**Ejemplo:**
Vamos a crear un nuevo array copiando solo las frutas cítricas del siguiente array:

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var frutas = ["Banana", "Naranja", "Limón", "Manzana", "Mango"];
var citricos = frutas.slice(1, 3);

console.log(citricos);

// Resultado:
// ["Naranja", "Limón"]

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/d144690cb07b05fe576a9ea9b3b5ab89
</code></pre>

<!-- end code snippet: -->

**Explicación:**

* La primera posisión del array es el 0*(Banana)*.

* Las cítricas son la naranja y el limón, necesitamos copiar en un nuevo array el elemento 1*(`Naranja`)* y el elemento 2*(`Limón`)*.

* Tengamos en cuenta que las posisiones que indiquemos incluye la del inicio y no incluye la del final.

* Es decir: `frutas.slice(1, 3)` copia desde la posisión 1*(`Naranja`)* que se incluye, hasta la posisión 3*(`Manzana`)* que no se incluye.

* Resultado:  `["Naranja", "Limón"]`.
<hr>

Si ponemos un sólo número como argumento será tomado como el primer argumento(inicio) y copiará hasta el final del array.

`fruits.slice(3)`

_Resultado_:

`["Manzana", "Mango"]`
<hr>

### Argumentos negativos.

* Si son números negativos el inicio comenzará en el final.

*Sintaxis negativos*:
*```array.slice(final, inicio)```*

Ejemplo:

`var frutas = ["Banana", "Naranja", "Limón", "Manzana", "Mango"];`

* Mango será la posisión 0, Manzana -1, etc...

* Por ejemplo `fruits.slice(-3, -1)` creará el siguiente array:

`["Limón", "Manzana"]`


Si ponemos un sólo número negativo como argumento lo tomará como el argumento final, siendo 0 el valor por defecto inicial.


`fruits.slice(-3)` creará un nuevo array con los elementos desde la posisión 0(Mango) a la -3(Naranja - no incluído):

`["Limón", "Manzana", "Mango"]`


**Inicial positivo. Final negativo:**


`fruits.slice(1, -3)` creará el array:


`["Naranja"]`

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
<script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
var frutas = ["Banana", "Naranja", "Limón", "Manzana", "Mango"];
var citricos = frutas.slice(1, 3);

console.log(citricos);
    </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>
<hr>

**Ejemplo Uso de Array slice() en Página Web.**
(click en Result para ver el resultado)

<script async src="https://jsfiddle.net/Pandawebs/deseevm6/embed/html,result/">
</script>

<!-- <iframe width="100%" height="650" src="https://jsfiddle.net/Pandawebs/deseevm6/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe> -->

<hr>

### Método String slice().

Funciona igual que [Array slice()](#) pero con strings.

*Ejemplo:*

<pre data-start="0"><code class="line-numbers language-javascript">
var str = "Hola mundo!";
var resultado = str.slice(0, 4);

console.log(resultado);

// Resultado:
// Hola

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/2c959f98762b0985a17bb0cdf0d504d7
</code></pre>

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
<script src="https://embed.tonicdev.com" data-element-id="my-el" >
</script>       
	var str = "Hola mundo!";
	var resultado = str.slice(0, 4);

	console.log(resultado);
</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>
</div>

<hr>

**Ejemplo Uso de String slice() en Página Web.**
(click en Result para ver el resultado)

<!-- <iframe width="100%" height="500" src="https://jsfiddle.net/Pandawebs/La8o9xxm/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
 -->
<script async src="https://jsfiddle.net/Pandawebs/La8o9xxm/embed/html,result/">
</script>

<br>

[*Lista de métodos nativos*](#)

<em>[Editar este artículo en Github](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/splice-javascript">anterior</a>
    <i>splice javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/reduce-javascript">siguiente</a>
    <i>reduce javascript</i>
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
