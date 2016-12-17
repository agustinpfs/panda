<span class="hidden-excerpt">Qué son los Objetos en Javascript. Definición - Uso - Ejemplos - Video tutorial. Ejemplo: Creación de un Objeto.</span>

<div class="post-content_next">
  <div style="visibility: hidden" class="post-content_next-left">
    <a href=""></a>
    <i>.</i>
  </div>
  <a href="http://pandawebs.net/metodos-javascript">
  <div class="post-content_next-right">
    <p>siguiente</p>
    <span>métodos javascript</span></a>
  </div>
</div>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://pandawebs.net/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Tutoriales-Javascript/edit/master/articles/objetos-javascript.md " target="_blank)</strong>

# Objetos Javascript 
*¿Qué son los Objetos en Javascript? Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

> *"La programación orientada a objetos puede considerarse como el diseño de software a través de un conjunto de objetos que cooperan"* -MDN

- Casi todo en Javascript es un Objeto (Functions, Arrays, Maths, etc..). Por ello se lo considera un lenguage orientado a Objetos.

- Los Objetos son compartimientos de código que interactúan entre si y forman parte de un programa.

- Son variables que pueden contener varias propiedades con distintos valores y/o acciones a través de funciones([métodos](# " target="_blank)).

- Consiguen un código más limpio al poder invocar los valores del Objeto a través de variables.

- Las *propiedades del Objeto* se escriben como pares de *```clave : valor```* separados por comas:

- Podemos crear nuestros propios Objetos.

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

<button class="post-content_button-console">PRUEBA EL CÓDIGO AHORA MISMO</button>

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

<hr>

==**Nota:**==

En este articulo hemos creado un sencillo "Objeto Literal". Esta manera de crear Objetos se la conoce como =="Inicializador de Objetos"==.

Hay 2 maneras más de crear Objetos que se profundizan en otros artículos:

* Con palabra clave/keyword =="new"==. `new Object()`. [ir al artículo](#)

* Usando un ==Constructor de Objetos==. [ir al artículo](#)

<hr>

### Objetos Nativos

Son aquellos Objetos suministrados por Javascript, tales como:

- String
- Number
- Array
- Image
- Date
- Math, etc.

**Estos Objetos funcionan como [*Constructor de Objetos*](http://pandawebs.net/constructor-de-objetos-javascript/)**

<br>
<!--            FIRMAR COMO COLABORADOR           -->

<!-- <hr>
###Colaboradores

[TU NOMBRE](TU LINK) 

-->
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Tutoriales-Javascript/edit/master/articles/objetos-javascript.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<a class="post-content-button">Video tutorial</a>
<hr>
<div class="post-content_next">
  <div style="visibility: hidden" class="post-content_next-left">
    <a href=""></a>
    <i>.</i>
  </div>
  <a href="http://pandawebs.net/metodos-javascript">
  <div class="post-content_next-right">
    <p>siguiente</p>
    <span>métodos javascript</span></a>
  </div>
</div>
<br>

**Enlaces relacionados:**

[Constructor de Objetos](http://pandawebs.net/constructor-de-objetos-javascript/)

[Métodos Javascript](#)

