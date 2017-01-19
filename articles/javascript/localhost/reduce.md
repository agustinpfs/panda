<span class="hidden-excerpt">Método reduce() en Javascript. Definición - Uso - Ejemplos - Video tutorial.</span>

<div class="post-content_next">
  <a href="http://localhost:2368/metodo-slice-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método slice()</span>
  </div>
  <a href="http://localhost:2368/metodo-map-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método map()</span>
    </div>
  </a>
</div>


<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-reduce-javascript.md " target="_blank)</strong>


# Método Array reduce() Javascript.

*Método reduce() en Javascript. Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

<hr>

El método Array reduce(), __==reduce todos los valores de un array a un único valor.==__ 
La manera de llegar al único valor lo definiremos en una función que se aplica.
Dicha función se repetirá por cada valor del array.


*Sintaxis:*

`array.reduce(function(acumulador,valorEnCurso), valorInicial)`

* `acumulador` (requerido) es el `valorInicial` (en la primera llamada a la función). A partir de la segunda llamada será el acumulado.

* `valorEnCurso` (requerido) el valor del elemento en curso del array.

* `valorInicial` (opcional) es un valor inicial que se tomará como base. Si no lo ponemos, el valor inicial del acumulador será igual al primer valor del array y el `valorEnCurso` será el segundo.


**Ejemplo:**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numeros = [6, 4, 5, 2];

function sumar(total, num) {
    return total + num;
}

var resultado = numeros.reduce(sumar)

console.log(resultado); 

// Resultado
// 17


//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/9760523c52273b007b0e0f8e121f8c1c
</code></pre>

<!-- end code snippet: -->

* `reduce(sumar)` _linea7_ llama a la función sumar _linea3_ hasta completar la suma.

* `num` _linea3y4_ (valor en curso) irá cambiando entre 4, 5 y 2.

* `total` _linea3y4_  (acumulador) arranca por 6 y le siguen los resultados del llamado a la función anterior, (10, 15)

    * 1º llamado: 6(total) + 4(num)
    * 2º llamado: 10(total) + 5(num)
    * 3º llamado: 15(total) + 2(num) (resultado final=17)

**Si queremos que arranque con un valor específico hará un llamado más:**

* En la linea 7 agregamos por ejemplo el 2(valor inicial):  `var resultado = numeros.reduce(sumar, 2)`.

    * 1º llamado: 2(total) + 6(num)
    * 2º llamado: 8(total) + 4(num)
    * 3º llamado: 12(total) + 5(num)
    * 4º llamado: 17(total) + 2(num) (resultado final=19)


**Podemos incorporar directamente la función sin tener que llamarla:**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numeros = [6, 4, 5, 2];

var resultado = numeros.reduce(function(total, num) {
    return total + num;
})

console.log(resultado);

// Resultado
// 17

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/c680ba08fb881e26984d6579a8d11d2f
</code></pre>

<!-- end code snippet: -->

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-ele" >
  <script src="https://embed.tonicdev.com" data-element-id="my-ele" ></script>       
  var numeros = [6, 4, 5, 2];

  var resultado = numeros.reduce(function(total, num) {
      return total + num;
  })

  console.log(resultado);
</div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>

**Ejemplo de reduce() aplicando el método _Math.round_:**

A un array con números decimales, deseamos redondearlos a números enteros para luego sumarlos.
Le agregaremos el valor inicial de 0 para que redondeé el primer elemento también.

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
var numeros = [6.2, 4.7, 5.5, 2.3];

function sumar(total, num) {
    return total + Math.round(num);
}

var resultado = numeros.reduce(sumar,0)

console.log(resultado); 

// Resultado
// 19


//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/e2427434d2a16238360c717154ce72d0
</code></pre>

<!-- end code snippet: -->

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
  <script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
  var numeros = [6.2, 4.7, 5.5, 2.3];

  function sumar(total, num) {
      return total + Math.round(num);
  }

  var resultado = numeros.reduce(sumar,0)

  console.log(resultado); 
</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>
</div>


<hr>

**Ejemplo Uso de Array reduce() en Página Web.**
(click en Result para ver el resultado)

<div class="Post-jsfiddle">
  <script async src="https://jsfiddle.net/Pandawebs/qzmcyat1/embed/html,result/">
  </script>
</div>


<hr>

<!-- [*Lista de métodos nativos*](#) -->

<br>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodo-reduce-javascript.md " target="_blank)</strong>

<hr>

<div class="post-content_next">
  <a href="http://localhost:2368/metodo-slice-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>método slice()</span>
  </div>
  <a href="http://localhost:2368/metodo-map-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método map()</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Métodos Javascript](http://localhost:2368/metodos-javascript/)

[Método splice()](http://localhost:2368/metodo-splice-javascript/)