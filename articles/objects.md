<em>[Editar este artículo en Github](# " target="_blank)</em>

# Objetos Javascript
*¿Qué son los Objetos en Javascript? Definición - Uso - Ejemplos - Video tutorial.*

<button class="post-content-button">ver video</button>

> *"La programación orientada a objetos puede considerarse como el diseño de software a través de un conjunto de objetos que cooperan"* -MDN

- Todo en Javascript es un objeto (Functions, Arrays, Strings, etc..). Por ello se lo considera un lenguage orientado a objetos.

- Son compartimientos de código que interactúan entre si y forman parte de un programa.

- Son variables que pueden contener varias propiedades con distintos valores y/o acciones a través de funciones([métodos](# " target="_blank)).

- Consiguen un código más limpio al poder invocar los valores del objeto a través de variables.

- Las *propiedades del objeto* se escriben como pares de *```clave : valor```* separados por comas:

- Podemos crear nuestros propios objetos.

<hr>

**Ejemplo. Creación de un Objeto llamado "persona":**
<pre data-start="0"><code class="line-numbers language-javascript">// Objeto persona:
var persona = {nombre:"Agustin", apellido:"Palmieri"};

//Podemos variar espacios y saltos de linea sin alterar el resultado:

var persona = {
    nombre : "Agustin",
    apellido : "Palmieri"
};

//Accedemos al valor de nombre:

console.log(persona.nombre); 
// ó
console.log(persona["nombre"]); 

// Nos devuelve:
// Agustin

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/0cf16fa98029aafb59e5314f61e7233c
</code></pre>

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR</span></p>
    <div id="console-object" >
    <script src="https://embed.tonicdev.com" data-element-id="console-object"></script>

        var persona = {  
            nombre : "Agustin",
            apellido : "Palmieri"
        };
        console.log(persona.nombre);  

    </div>
<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>

<hr>
<br>

**Ejemplo de uso en una Página Web**
(click en Result para ver el resultado)

<iframe width="100%" height="600" src="https://jsfiddle.net/Pandawebs/4m2rzu8m/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<br>

<hr>

<br>

### Objetos Nativos

Son aquellos objetos suministrados por javascript, tales como:

- String
- Number
- Array
- Image
- Date
- Math, etc.

**Estos Objetos funcionan como [*Constructor de objetos*](http://localhost:2368/constructor-de-objetos-javascript/)**

<small><i>Los [*constructores de objetos*](http://localhost:2368/constructor-de-objetos-javascript/) son los que mejor reflejan el poder de los Objetos.</i></small>

<br>
<br>

<em>[Editar este artículo en Github](# " target="_blank)</em>
<hr>
<button class="post-content-button">video tutorial de este artículo</button>
<hr>
<div class="post-content_next">
  <div class="post-content_next-left">
    <a href=""></a>
    <i>.</i>
  </div>
  <div class="post-content_next-right">
    <a href="http://localhost:2368/metodos-javascript/">siguiente</a>
    <i>métodos javascript</i>
  </div>
</div>
<hr>
### Enlaces relacionados:
[*Constructor de objetos*](http://localhost:2368/constructor-de-objetos-javascript/)


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