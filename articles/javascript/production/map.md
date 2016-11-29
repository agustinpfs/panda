<em>[Editar este artículo](# " target="_blank)</em>

# Método Array map() Javascript.

==El metodo map llama a una función por cada elemento de un array.==

*Sintaxis:*

array.map(function(currentValue,index,arr), thisValue)
http://www.w3schools.com/jsref/jsref_map.asp

**Ejemplo:**

El metodo map crea un nuevo array *`dobles`* a partir de los resultados de una funcion que toma como argumento *`(num)`* por cada uno de los elementos de array original dado *`[1, 4, 9]`*.

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numeros = [1, 4, 9];
var dobles  = numeros.map(function (num) {
  return num * 2;
}); 

console.log(dobles);

// Resultado:
// [ 2, 8, 18 ]


//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/a9c8acabb0bc4d4e760e61e4c6717985
</code></pre>

<!-- end code snippet: -->

En el ejemplo el nuevo array se construye de la siguiente manera:

* Primero: `(num)` (fila 2) se convierte en el _primer_ elemento del array `numeros` que es 1.
Lo multiplica por 2 (linea 3) y el resultado(2) lo coloca en la _primera_ posisión del nuevo array.

* Segundo: `(num)` (fila 2) se convierte en el _segundo_ elemento del array `numeros` que es 4.
Lo multiplica por 2 (linea 3) y el resultado(8) lo coloca en la _segunda_ posisión del nuevo array.

* Tercero: `(num)` (fila 2) se convierte en el _tercero_ elemento del array `numeros` que es 9.
Lo multiplica por 2 (linea 3) y el resultado(18) lo coloca en la _tercera_ posisión del nuevo array.

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-ele" >
  <script src="https://embed.tonicdev.com" data-element-id="my-ele" ></script>       
	var numeros = [1, 4, 9];
	var dobles  = numeros.map(function (num) {
	  return num * 2;
	}); 

	console.log(dobles);
</div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>


**Ejemplo con [método nativo:](# " target="_blank)**

En este ejemplo en vez de utilizar una función propia, utilizamos el [método nativo](# " target="_blank) [sqrt del Objeto Math](#) que se encarga de devolver la raíz cuadrada de un número. 
Gracias a map realizamos la operación a cada uno de los elementos del array([iteración](# " target="_blank)), creando uno nuevo con el resultado de cada uno:

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numeros = [4, 9, 16, 25];

var rc = numeros.map(Math.sqrt);

console.log(rc);

// Resultado:
// [ 2, 3, 4, 5 ]


//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/0df82f0688ae2069b3e0305cb1df2eb7
</code></pre>

<!-- end code snippet: -->

<br>

**Ejemplo con strings como elementos:**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var misPalabras = ["casa", "auto", "mesa", "silla"];

var plural  = misPalabras.map(function(num) {
  return num + "s";
});

console.log(plural);

// Resultado:
// [ 'casas', 'autos', 'mesas', 'sillas' ] -->



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/c1b1959e8ef8bd317fb082cb384660f1
</code></pre>

<!-- end code snippet: -->

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
  <script src="https://embed.tonicdev.com" data-element-id="my-el" ></script>       
	var misPalabras = ["casa", "auto", "mesa", "silla"];

	var plural  = misPalabras.map(function(num) {
	  return num + "s";
	});

	console.log(plural);
</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>
</div>

<br>

**Ejemplo Uso de Array map() en Página Web.**
(click en Result para ver el resultado)

<script async src="https://jsfiddle.net/Pandawebs/xzpjbd0w/embed/html,result/">
</script>

<br>

**Ejemplo con [objetos](# " target="_blank) como elementos, unidos con el [método Array join()](#):**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var persons = [
    {nombre : "Agustin", apellido: "Palmieri", edad: 39},
    {nombre : "Andrea", apellido: "Genero", edad: 40},
    {nombre : "Lucas", apellido: "Martignetti", edad: 45}
];

var nombreYedad = persons.map(function (item) {
    return [item.nombre,item.edad].join(", " ) + " años";
})

console.log(nombreYedad);

// Resultado:
// [ 'Agustin, 39 años', 'Andrea, 40 años', 'Lucas, 45 años' ]



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/efba475c5e15c6072084e50fe813ce2d
</code></pre>

<!-- end code snippet: -->

**En una Página web:**

<script async src="https://jsfiddle.net/Pandawebs/Luaaa7u7/embed/html,result/">
</script>

<hr>

[*Lista de métodos nativos*](#)

<em>[Editar este artículo](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/reduce-javascript">anterior</a>
    <i>reduce javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/join-javascript">siguiente</a>
    <i>join javascript</i>
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

