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

<hr>
Siguiente:
[*`Métodos de objetos`*](#)
