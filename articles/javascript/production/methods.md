<span class="hidden-excerpt">¿Qué son los Métodos en Javascript. Definición - Uso - Ejemplos - Video tutorial. Ejemplo: Creación de un Método.</span>

<div class="post-content_next">
  <a href="http://pandawebs.net/objetos-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>objetos javascript</span>
  </div>
  <a href="http://pandawebs.net/constructor-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>constructor javascript</span>
    </div>
  </a>
</div>


<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://pandawebs.net/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodos-javascript.md " target="_blank)</strong>


# Métodos Javascript

*¿Qué son los Métodos en Javascript? Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](#) [Video tutorial](#)</span>

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

<hr>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://pandawebs.net/tutoriales-javascript/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/metodos-javascript.md " target="_blank)</strong>

<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/objetos-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>objetos javascript</span>
  </div>
  <a href="http://pandawebs.net/constructor-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>constructor javascript</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Constructor de Objetos](http://pandawebs.net/constructor-de-objetos-javascript/)

[Métodos Javascript](#)