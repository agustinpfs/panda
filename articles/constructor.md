## Constructor de objetos

Es una función que nos servirá para crear muchos objetos.
<script src="https://gist.github.com/agustinpfs/232b6b12807426925d22912c4e972d46.js"></script>

> Vemos que gracias al constructor creamos 2 objetos llamados "miHermana" y "miHermano".
Podríamos crear la cantidad que quisieramos utilizando una misma estructura (constructor).

<br>

*`Despejemos dudas agregando conectores de colores al código:`*
<br>

![alt text][logo]

[logo]: constructor-de-objetos.png "Constructor Objetos Javascript"
> Este constructor es una función que crea *objetos de tipo "Persona"*.  

* Tengamos en cuenta que los argumentos `(nom, edad)` en la linea 1 le podemos
 poner cualquier nombre. Lo relevante será el orden ya que corresponderán al mismo orden (posisión) que tienen los nuevos valores de las propiedades en las lineas 5 y 6 (conectores rojos y verdes).
 `nom, María y Leonardo -> posisión 1` `edad, 30 y 47 -> posisión 2`.

* Los argumentos deberán ser iguales a los valores de las propiedades (conectores azules). 

* Los nombres de los argumentos son independientes del nombre que le pongamos a las propiedades.  
Pueden ser iguales en el caso de la edad en la linea 3 `this.edad = edad;`. O distintos en el caso del nombre en la linea 2 `this.nombre = nom;`.

* En las lineas 5 y 6 llamamos a construír 2 objetos de tipo `persona`*(nombre de la función constructora)*.
Un objeto llamado `"miHermana"` y otro llamado `"miHermano"`.

* *`new`* y *`this`* son palabras reservadas(Keywords) necesarias para el uso del constructor.
    * *`new`*  nuevo objeto.
    * *`this`* sera reemplazado por el nombre del nuevo objeto `"miHermana"` - `"miHermano"` cuando necesitemos acceder a sus respectivos valores (conectores naranjas y conectores celestes).

* Las conectores marrones indican el nombre de la propiedad con la cual llamaremos cuando deseemos obtener valores de nuestro objeto. `nombre` `edad`.

```
Para reforzar tu aprendizaje, te animo a probar el código. Puedes agregarle más argumentos, cambiarlos de lugar o cualquier clase de experimentación que se te ocurra``` [Ir al editor de código](https://jsfiddle.net/Pandawebs/udt209hd/){:target="_blank"}


#### Uso

Veamos como podemos implementar este ejemplo en una página web.
Utilizamos *getElementById* e *innerHTML* para mostrar el resultado luego de hacer clic en un botón.
`click en Result para ver el resultado`

<!-- <iframe width="100%" height="600" src="https://jsfiddle.net/Pandawebs/s78cn1xk/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

 -->
 <iframe width="100%" height="650" src="https://jsfiddle.net/Pandawebs/s78cn1xk/embedded/html,result/"  allowfullscreen="allowfullscreen" frameborder="0"></iframe>

cambiar valor de propiedades a través de un método
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
Siguiente:
[*`Métodos de objetos`*](#)
