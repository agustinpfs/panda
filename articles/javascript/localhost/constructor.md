<span class="hidden-excerpt">¿Qué son los constructores de objetos en Javascript. Definición - Uso - Ejemplos - Video tutorial. Ejemplo: Creación de un constructor de objetos Javascript.</span>

<div class="post-content_next">
  <a href="http://localhost:2368/metodos-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>métodos javascript</span>
  </div>
  <a href="http://localhost:2368/metodo-split-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método split()</span>
    </div>
  </a>
</div>


<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/constructor-de-objetos-javascript.md " target="_blank)</strong>


# Constructor de objetos

*Qué son los Constructores de Objetos en Javascript. Definición - Uso - Ejemplos - Video tutorial.*

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

==Es una función que nos servirá para crear muchos objetos a partir de una misma estructura.==

**Ejemplo:** 
Creamos 2 objetos llamados "miHermana" y "miHermano" utilizando un constructor llamado "persona".

<!-- box code whit highlight: /////////////////////////////////////////////////////////-->

<pre data-start="1"><code class="line-numbers language-javascript">
// Constructor "persona":

function persona(nom, edad) {
    this.nombre = nom;
    this.edad = edad;   
};

var miHermana = new persona("María", 30);
var miHermano = new persona("Leonardo", 47);

// Ejecutamos:

console.log(miHermano.nombre)

// Nos devuelve:
// Leonardo

// Ejecutamos:

console.log(miHermana.edad)

// Nos devuelve:
// 30

//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/232b6b12807426925d22912c4e972d46.js
</code></pre>

<!-- End box code ///////////////////////////////////////////////////////////////////// -->

<br>

**Despejemos dudas agregando conectores de colores al código:**


![alt](http://localhost:2368/assets/images/constructor-de-objetos.png)


**Explicación:**

==Este constructor es una función que crea *objetos de tipo "persona."*==  

* Tengamos en cuenta que los argumentos `(nom, edad)` en la linea 1 le podemos
 poner cualquier nombre. Lo relevante será el orden ya que corresponderán al mismo orden (posisión) que tienen los nuevos valores de las propiedades en las lineas 5 y 6 (conectores rojos y verdes).

 *nom(posisión 1) = María y Leonardo.*

 *edad(posisión 2) = 30 y 47.*

* Los argumentos deberán ser iguales a los valores de las propiedades (conectores azules). 

* Los nombres de los argumentos son independientes del nombre que le pongamos a las propiedades.  
Pueden ser iguales en el caso de la edad en la linea 3 `this.edad = edad;`. O distintos en el caso del nombre en la linea 2 `this.nombre = nom;`.

* En las lineas 5 y 6 llamamos a construír 2 objetos de tipo `persona`*(nombre de la función constructora)*.
Un objeto llamado `"miHermana"` y otro llamado `"miHermano"`.

* *`new`* y *`this`* son palabras reservadas(Keywords) necesarias para el uso del constructor.
    * *`new`*  nuevo objeto.
    * *`this`* sera reemplazado por el nombre del nuevo objeto `"miHermana"` - `"miHermano"` cuando necesitemos acceder a sus respectivos valores (conectores naranjas y conectores celestes).

* Las conectores marrones indican el nombre de la propiedad con la cual llamaremos cuando deseemos obtener valores de nuestro objeto. `nombre` `edad`.

<button class="post-content_button-console">Prueba el código ahora mismo</button>

<div class="post-content_console">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR.</span></p>
    
<div id="my-el" >
<script src="https://embed.tonicdev.com" data-element-id="my-el" ></script>       
function persona(nom, edad) {
    this.nombre = nom;
    this.edad = edad;   
};

var miHermana = new persona("María", 30);
var miHermano = new persona("Leonardo", 47);

console.log(miHermano.nombre)

    </div>

<span class="post-content_buttonx-console"><small>close</small>x</span>
</div>
<hr>
**Ejemplo de uso en una Página Web**
(click en Result para ver el resultado)

<div class="Post-jsfiddle">
 <script async src="https://jsfiddle.net/Pandawebs/s78cn1xk/embed/html,result/"></script>
</div>

<hr>

**Ejemplo:** Podemos crear un [método](http://localhost:2368/metodos-javascript/) para poder cambiar valores de propiedades del objeto constructor.

<!-- start box code whit highlight: /////////////////////////////////////////////////////////-->

<pre data-start="1"><code class="line-numbers language-javascript">
// Constructor 'alumno' con método 'cambiarNombre':

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

<!-- End box code ///////////////////////////////////////////////////////////////////// -->

</code></pre>
Nota:
La función de la propiedad `cambiarNombre`_(linea 6)_ asigna el valor de los argumentos `(nom, apell)` a las propiedades nombre y apellido.

<button class="post-content_button-console2">Prueba el código ahora mismo</button>

<div class="post-content_console2">

<p>"run" para ejecutar. <span class="post-content_console-mark">CAMBIA LOS VALORES PARA PRACTICAR</span></p>
   <div id="my-ele" >
       <script src="https://embed.tonicdev.com" data-element-id="my-ele"></script>

<!-- box code console: /////////////////////////////////////////////////////////-->

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

<!-- End box code ///////////////////////////////////////////////////////////////////// -->

</div>

<span class="post-content_buttonx-console2"><small>close</small>x</span>

</div>

<hr>

<span class="link-to-index-git">Tutoriales Javascript. [ ver índice](http://localhost:2368/tutoriales-javascript/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/tutoriales-javascript/edit/master/constructor-de-objetos-javascript.md " target="_blank)</strong>

<hr>

<div class="post-content_next">
  <a href="http://localhost:2368/metodos-javascript/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>métodos javascript</span>
  </div>
  <a href="http://localhost:2368/metodo-split-javascript/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>método split()</span>
    </div>
  </a>
</div>

<br>

**Enlaces relacionados:**

[Métodos Javascript](http://localhost:2368/metodos-javascript/)

[Objetos Javascript](http://localhost:2368/metodos-javascript/)
