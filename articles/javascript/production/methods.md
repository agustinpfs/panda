<em>[Editar este artículo](# " target="_blank)</em>

# Métodos Javascript

*¿Qué son los Métodos en Javascript? Definición - Uso - Ejemplos - Video tutorial.*

==Métodos en javascript son acciones dentro de los objetos.
Es una función en una propiedad del objeto.==

**Ejemplo:**

<!-- code whit highlight: -->
<pre data-start="0"><code class="line-numbers language-javascript">// Objeto 'persona' con Método 'nombreCompleto':

var persona = {
    nombre : "Agustin",
    apellido : "Palmieri",
    nombreCompleto: function() {return this.nombre + " " + this.apellido;}
};

// Accedemos al método nombreCompleto:

console.log(persona.nombreCompleto());

// El resultado es:
// Agustin Palmieri

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/fe6b123652eb0237260e0562ba377d74
</code></pre>

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
<script src="https://embed.tonicdev.com" data-element-id="my-el" ></script>       
var persona = {
    nombre : "Agustin",
    apellido : "Palmieri",
    nombreCompleto: function() {return this.nombre + " " + this.apellido;}
};

console.log(persona.nombreCompleto());

    </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

==`this` hace referencia a `persona`==. Practica colocando `persona.nombre` y `persona.apellido` en lugar de `this.nombre` y `this.apellido`. Verás que obtienes el mismo resultado.

<hr>

**Ejemplo de uso en una Página Web**
(click en Result para ver el resultado)

<div>
<script async src="https://jsfiddle.net/Pandawebs/tkh92dnf/embed/html,result/"></script>
</div>
<hr>

### Métodos incluídos en Javascript.

Existen múltiples métodos que vienen por defecto en los objetos nativos de javascript.


Ejemplos:

* Métodos del objeto Array:
    * [split()](#)
    * [map()](#)
    * [slice()](#)

* Método del objeto String.
    * [substr()](#)
    * [slice()](#)

* Método del objeto Math.
    * [random()](#) 

[*Lista de métodos nativos*](#)

<em>[Editar este artículo](# " target="_blank)</em>

<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href="http://localhost:2368/objetos-javascript/">anterior</a>
    <i>objetos javascript</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/constructor-de-objetos-javascript">siguiente</a>
    <i>constructor javascript</i>
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