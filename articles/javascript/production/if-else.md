<em>[Editar este artículo](# " target="_blank)</em>

# If - Else condicionales Javascript.

==Controlan diferentes procesos que se basan en diferentes condiciones.==

*Sintaxis:*

	if (condición1)
   		sentencia1
	else if (condición2)  // opcional
   		sentencia2
	else if (condición3) // opcional
   		sentencia3
	else 				// opcional
   		sentenciaN



* Si una condición es verdadera se ejecuta su respectiva sentencia.

* Si es falsa pasa a la siguiente (else if).

* Si ninguna es verdadera se ejecuta la última sentencia(else)

* Las condicionales else if y else son opcionales.

* Si no ponemos else al final y las anteriores condiciones son falsas no se ejecutará nada.

**Ejemplo:**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">
if ( 7 < 3 )
	console.log('condición 1 verdadera');
else if ( 7 < 2 )
	console.log('condición 1 falsa, condición 2 verdadera');
else
	console.log('Todas las condiciones falsas');

// Resultado:
// Todas las condiciones falsas



//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/19b1a3f2464fa34bf34dd5be886f0825
</code></pre>

<!-- end code snippet: -->


La 1º condición `( 7 < 3 )` en la linea 1 es falsa y pasa a la siguiente: `else if ( 7 < 2 )`. Cómo también es falsa se ejecuta la condición `else`.

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-elem" >
  <script src="https://embed.tonicdev.com" data-element-id="my-elem" ></script>       
  if ( 7 < 3 )
  	console.log('condición 1 verdadera');
  else if ( 7 < 2 )
  	console.log('condición 1 falsa, condición 2 verdadera');
  else
  	console.log('Todas las condiciones falsas');
</div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

**Ejemplo Uso de condicionales "If - Else" en Página Web.**
(click en Result para ver el resultado)

<script async src="https://jsfiddle.net/Pandawebs/0myb8qo8/embed/html,result/"></script>

<hr>

**Enlaces relacionados:**

[*Enlaces relacionados*](#)

<em>[Editar este artículo](#)</em>

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