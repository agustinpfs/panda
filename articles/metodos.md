# Métodos Javascript

*¿Qué son los Métodos en Javascript? Definición - Uso - Ejemplos - Video tutorial.*

==Métodos en javascript son acciones dentro de los objetos.
Es una función en una propiedad del objeto.==

**Ejemplo:**
<pre data-start="0"><code class="line-numbers language-javascript">// Objeto 'Persona' con Método 'nombreCompleto':

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
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/0cf16fa98029aafb59e5314f61e7233c
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

Podemos crear un método para poder cambiar valores de propiedades del [objeto constructor](#)

<pre data-start="0"><code class="line-numbers language-javascript">// Constructor 'alumno':
function alumno(nombre, apellido, año, aula, materia) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.aula = aula;
    this.materia = materia;
    this.cambiarNombre = function (nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    };
}

var mejorPromedio = new alumno("Agustin", "Palmieri", "segundo", 5, "javascript");

mejorPromedio.cambiarNombre("José","Gomez");

console.log("El mejor promedio es de " + mejorPromedio.nombre + " " + mejorPromedio.apellido);

// Resultado:
// El mejor promedio es de José Gomez

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/7db2a08e573bef19e7ac31dce18cc90a#file-test-js
</code></pre>
Nota:
`La función de la propiedad` _`cambiarNombre(linea 6)`_ `asigna el valor de los argumentos (nom, apell) a las propiedades nombre y apellido.`

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR</span></p>
   <div id="my-ele" >
       <script src="https://embed.tonicdev.com" data-element-id="my-ele"></script>
function alumno(nombre, apellido, año, aula, materia) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.aula = aula;
    this.materia = materia;
    this.cambiarNombre = function (nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    };
}

var mejorPromedio = new alumno("Agustin", "Palmieri", "segundo", 5, "javascript");

mejorPromedio.cambiarNombre("José","Gomez");

console.log("El mejor promedio es de " + mejorPromedio.nombre + " " + mejorPromedio.apellido);
</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>

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
