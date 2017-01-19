<span class="hidden-excerpt">Método map() en Javascript. Definición - Uso - Ejemplos - Video tutorial.</span>

<div class="post-content_next">
  <a href="http://localhost:2368/metodo-reduce-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método reduce()</span>
  </div>
  <a href="http://localhost:2368/metodo-join-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método join()</span>
    </div>
  </a>
</div>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-join-javascript.md " target="_blank)</strong>

# Método Array map() Javascript.

*Método Split() en Javascript. Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<hr>

__==El metodo map() llama a una función por cada elemento de un array. 
Se crea un nuevo array con los resultados de cada llamado.==__

*Sintaxis:*

`array.map(función, valorThis)`

* `función` Produce cada elemento del nuevo array.

* `valorThis` Si la función utiliza la palabra clave *this* será reemplazada por este valor.

**La función recibe tres parámetros**

Entonces la sintaxis completa sería:

`array.map(function(valorEnCurso,index,arr), valorThis)`

* `valorEnCurso` el valor del elemento en curso del array.

* `index` el índice. El número de la posisión en curso del array.

* `arr` el array completo con el que está trabajando `map`.

> En este artículo nos limitaremos a trabajar con los siguientes argumentos ya que son éstos los más importantes y utilizados:

`array.map(function(valorEnCurso))`

>Igualmente al final del [video tutorial](#)
vemos algunos ejemplos para que sepan cómo trabajan el resto de los argumentos.
A futuro los agregaremos a este artículo o crearemos uno nuevo sobre el uso de todos los argumentos del método `map`.

**Ejemplo:**

El metodo map crea un nuevo array *`dobles`* a partir de los resultados de una funcion que toma como argumento *`(num)`* por cada elemento del array original *`[1, 4, 9]`*.

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

<div class="Post-jsfiddle">
  <script async src="https://jsfiddle.net/Pandawebs/xzpjbd0w/embed/html,result/">
  </script>
</div>

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

<div class="Post-jsfiddle">
  <script async src="https://jsfiddle.net/Pandawebs/Luaaa7u7/embed/html,result/">
  </script>
</div>

<hr>

<!-- [*Lista de métodos nativos*](#) -->

<br>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-map-javascript.md " target="_blank)</strong>

<hr>

<div class="post-content_next">
  <a href="http://localhost:2368/metodo-reduce-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método reduce()</span>
  </div>
  <a href="http://localhost:2368/metodo-join-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método join()</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Métodos Javascript](http://localhost:2368/metodos-javascript/)

[Método reduce()](http://localhost:2368/metodo-reduce-javascript/)
