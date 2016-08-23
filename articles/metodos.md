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

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR</span></p>
    
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




[*`Lista de métodos nativos`*](#)
