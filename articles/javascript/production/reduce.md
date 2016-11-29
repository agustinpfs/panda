<em>[Editar este artículo](# " target="_blank)</em>

# Método Array reduce() Javascript.

El método Array reduce(), ==reduce todos los valores de un array a un único valor.== Aplica una función que se repite hasta completar la cantidad de elementos del array. 
reduce() acumula el resultado en el primer parámetro (total)

*Sintaxis:*

`array.reduce(function(total,valorEnCurso), valorInicial)`

* `total` (requerido) es el valor inicial(en el 1º llamado) y luego el acumulado.

* `valorEnCurso` (requerido) el valor del elemento en curso del array .

* `valorInicial` (opcional) es un valor inicial que se tomará como base. Si no lo ponemos el de primer elemento del array.

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

* `reduce(sumar)` _**linea7**_ llama a la función sumar _**linea3**_  por cada elemento del array sin contar el primero (3 veces en el ejemplo).

* `num` _**linea3y4**_ irá cambiando entre 4, 5 y 2.

* `total` _**linea3y4**_ arranca por 6 y le siguen los resultado del llamado a la función anterior, (10, 15)

    * 1º llamado: 6(total) + 4(num)
    * 2º llamado: 10(total) + 5(num)
    * 3º llamado: 15(total) + 2(num) (resultado final=17)

**Si queremos que arranque con un valor específico hará un llamado más:**

* En la linea x  agregamos por ejemplo el 2(valor inicial):  `var resultado = numeros.reduce(sumar, 2)`.

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

<script async src="https://jsfiddle.net/Pandawebs/qzmcyat1/embed/html,result/">
</script>

<!-- Código del fiddle:

<!DOCTYPE html>
<html>
  <body>
  
    <p>Promedios</p>
    
    <ul>
      <li>2.3</li>
      <li>5.5</li>
      <li>4.7</li>
      <li>6.2</li>
    </ul>
    
    <button onclick="miFuncion()">Sumar notas como enteros</button>

    <p id="demo"></p>

    <script>
      var numeros = [6.2, 4.7, 5.5, 2.3];

      function sumar(total, num) {
        return total + Math.round(num);
      }

      function miFuncion() {

        var resultado = numeros.reduce(sumar, 0)
        document.getElementById("demo").innerHTML = resultado;
      }

    </script>

  </body>
</html>

-->

<hr>

[*Lista de métodos nativos*](#)

<em>[Editar este artículo](#)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/slice-javascript">anterior</a>
    <i>slice javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/map-javascript">siguiente</a>
    <i>map javascript</i>
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
