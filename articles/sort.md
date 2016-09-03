[Lista de métodos nativos](#)
<em>[Editar este artículo en Github](# " target="_blank)</em>

# Método Array sort() Javascript.

==Ordena los elementos de un array alfabeticamente según su valor [Unicode](#).== Es decir, ordenará 1º los números o strings que comienzen por números, luego las mayúsculas, luego las minúsculas.

*Sintaxis:* `array.sort(funcionComparacion)`

`array.sort` Ordena los elementos según su valor [Unicode](#) de manera ascendente.

`funcionComparacion` Opcional. Sirve para crear una sentencia para personalizar el orden.

<br>

Ejemplo sin `funcionComparacion`:

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var ejemplo = ["casa", "auto", 2, 1, "Ropa"];
ejemplo.sort();

console.log(ejemplo);

// Resultado:
// [ 1, 2, 'Ropa', 'auto', 'casa' ]

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/a31ff29d6cd1fd6591b677041771afaf
</code></pre>

<!-- end code snippet: -->

Para conseguir un orden descendente agregamos a `ejemplo.sort()` el método reverse `reverse()`.

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var ejemplo = ["casa", "auto", 2, 1, "Ropa"];
ejemplo.sort().reverse();

console.log(ejemplo);

// Resultado:
// ["casa", "auto", "Ropa", 2, 1]

//------------------------------------------------
// ver cómo Gist en Github  -->> hacer!!!!!
</code></pre>

<!-- end code snippet: -->

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
<script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
var ejemplo = ["casa", "auto", 2, 1, "Ropa"];
ejemplo.sort();

console.log(ejemplo);
    </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

**Ordenar números con sort() Javascript:**

Como sort convierte los valores a strings no sirve para ordenar números. "100" se ordenará primero que "25" ya que cuenta el primer caracter, y 1 está antes que 2.

Para ordenar números agregaremos una **función de comparación** que pueda retornar 1, 0 ó -1 .

El método sort con esta función irá comparando de 2 en 2 los elementos.

Si el resultado de la comparación es negativo(-1), el primer elemento comparado deberá acomodarse en una posisión anterior al segundo elemento comparado.

Si es 0, no habrá cambios.

Si es positivo(1), el segundo elemento comparado deberá acomodarse en una posisión anterior a el primer elemento comparado.


<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numbers = [4, 2, 5, 9, 9, 1];
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

// Resultado:
// [ 1, 2, 4, 5, 9, 9 ]




//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/15b135562eb2fe9c1d24cd5ec0870b43
</code></pre>

<!-- end code snippet: -->


Este script compara varias veces de a dos en dos los elementos del array y los acomoda según el resultado negativo(-1), cero(0) positivo(1).

Para conseguir un orden descendente en vez de `return a - b` pondremos `return b -a`

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-ele" >
	<script src="https://embed.tonicdev.com" data-element-id="my-ele" ></script>       
	var numbers = [4, 2, 5, 9, 9, 1];
	numbers.sort(function(a, b) {
	  return a - b;
	});

	console.log(numbers);
</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>
</div>


Nota: la declaración de la función de comparación puede ser cualquiera, siempre y cuando el resultado pueda ser positivo, negativo o igual para que pueda hacer la comparación y efectuarse el orden.
<hr>

Para aclarar el funcionamiento de la función de comparación, agregaremos un console.log que nos imprimirá las veces que se llama a la función y a que elementos se les asignan los parametros a o b respectivamente.

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numbers = [4, 2, 5, 9, 9, 1];
numbers.sort(function(a, b) {
  console.log( "comparando " + "a:" + a + " y b:" + b );

  return a - b;

});
console.log(numbers);

// Resultado, 9 comparaciones:

// comparando a:4 y b:2
// comparando a:4 y b:5
// comparando a:5 y b:9
// comparando a:9 y b:9
// comparando a:9 y b:1
// comparando a:9 y b:1
// comparando a:5 y b:1
// comparando a:4 y b:1
// comparando a:2 y b:1
// [ 1, 2, 4, 5, 9, 9 ]



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/1f007fb5625dec6a31949440b13b9b32
</code></pre>

<!-- end code snippet: -->

<button class="post-content_button-console3">Prueba el código ahora mismo</button>

<div class="post-content_console3">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
	<script src="https://embed.tonicdev.com" data-element-id="my-el" ></script>       
	var numbers = [4, 2, 5, 9, 9, 1];
	numbers.sort(function(a, b) {
	  console.log( "comparando " + "a:" + a + " y b:" + b );

	  return a - b;

	});
	console.log(numbers);
</div>

<span class="post-content_buttonx-console3"><small>close</small>x</span>
</div>

<hr>

**Ejemplo Uso de Array sort() en Página Web.**
(click en Result para ver el resultado)

<script async src="https://jsfiddle.net/Pandawebs/3yLe74w9/embed/html,result/">
</script>

[*Lista de métodos nativos*](#)

<em>[Editar este artículo en Github](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/replace-javascript">anterior</a>
    <i>replace javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/sort-javascript">siguiente</a>
    <i>??? javascript</i>
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