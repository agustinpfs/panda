<em>[Editar este artículo en Github](# " target="_blank)</em>

Ejemplo Algoritmo Javascript.
<hr>
## Encontrar la palabra más larga de un string.

**Practicaremos:**

* [Método Array split()](#)

* [Propiedad Array length](#)

* [Ciclo For](#)

* [Condicional If](#)

Si no tienes claro estos conceptos te animo a que revises sus tutoriales.

**Código:**
==Nos devuelve el apellido de mayor longitud: `Villalobos`==

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var texto = 'Aguilera Pedraza Villalobos Zamorano';

function palabraMasLarga(texto) {
	var palabra = texto.split(' ');
	var resultado = "";
	
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i].length > resultado.length) {
			resultado = palabra[i];
		};
	};
	  return resultado;
};

console.log(palabraMasLarga(texto));

// Resultado:
// Villalobos



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/f5589a087820b6adc063643fff0102af
</code></pre>

<!-- end code snippet: -->

1. A la variable texto le asignamos el string con las palabras en que se realizará la búsqueda. En este ejemplo usamos apellidos.
 **linea 1** `var texto = 'Aguilera Pedraza Villalobos Zamorano'`

2. Creamos la función `palabraMasLarga` y le asignamos la variable `texto` como argumento.
**linea3** `function palabraMasLarga(texto) {
			}`

3. Debemos convertir las palabras en elementos de un array para poder [iterar](#) sobre ellas.
Para ello utilizamos [split](#) indicándole donde se hará la división. En este caso usamos los espacios en blanco ya que es lo que divide las palabras. Lo hacemos con un espacio entre comillas `split(' ')`.
**linea4** `var palabra = texto.split(' ')`

4. A raiz del paso anterior la variable `palabra` se le asigna el array: `[ 'Aguilera', 'Pedraza', 'Villalobos', 'Zamorano' ]`.

5. Creamos la variable resultado y le asignamos un string vacío donde se alojará el resultado *(la palabra más larga)*.
**linea 5**. `var resultado = ""`

6. Ahora necesitamos ir sobre cada palabra comprobando si es más larga que la anterior. Para ello vamos a iterar sobre el array palabra usando el tipo de ciclo "for".
	**linea 5** `for (var i = 0; i < palabra.length; i++) { }`

	* La cantidad de ciclos lo determina la longitud del array calculado por length. En el ejemplo sería igual a 4.
	**linea 5** `palabra.length` = 4 *(elementos del array)*

	* Necesitamos contar desde la posisión 0 ("Aguilera"). Por esta razón a la variable i le asignaremos 0.
	**linea 5** `var i = 0`

7. La declaración if determinará si la palabra actual del ciclo es mas larga que la anterior. 
**linea 8** `if (palabra[i].length > resultado.length)`
	* Si la condición es verdadera, a la palabra actual del ciclo se le asignará a la variable resultado suplantando al valor anterior.
	**linea 9** `resultado = palabra[i]` y **linea 5** `var resultado = ""`

> La variable resultado cambiará de string vacío (`""`) a `"Aguilera"` a `"Villalobos"`. 
`"Pedraza"` y `"Zamorano"` nunca serán valor de la variable resultado porque no cumple la condición de la condicional "if".

10. Para obtener el resultado, antes de cerrar la función retornamos la variable resultado:
**linea 12** `return resultado`

11. Para mostrar el resultado hacemos un `console.log` llamando a la función "palabraMasLarga":
**linea 15** `console.log(palabraMasLarga(texto))`

<hr>

**Despejemos dudas agregando conectores de colores al código:**


![alt](http://localhost:2368/assets/images/algoritmo-palabra-larga.png)

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
  <script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
  var texto = 'Aguilera Pedraza Villalobos Zamorano';

  function palabraMasLarga(texto) {
  	var palabra = texto.split(' ');
  	var resultado = "";
  	
  	for (var i = 0; i < palabra.length; i++) {
  		if (palabra[i].length > resultado.length) {
  			resultado = palabra[i];
  		};
  	};
  	  return resultado;
  };

  console.log(palabraMasLarga(texto));

 </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>
<br>
<br>
**Veamos como podemos usar éste algoritmo en una aplicación web**

<script async src="https://jsfiddle.net/Pandawebs/b4g4zjeb/embed/html,result/"></script>

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