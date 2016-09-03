<em>[Editar este artículo en Github](# " target="_blank)</em>

# Expresiones Regulares Javascript(regex).

Encuentran caracteres en un string según un patrón dado. 
Se utilizan para búsqueda, modificación, extracción o reemplazo.

**Principales métodos que pueden utilizar expresiones regulares:**

* RegExp exec()

* RegExp test()

* String match()

* String search()

* [String replace()](#)

* [String split()](#)

**Sintaxis:**
`/patrón/modificadores`

`/patrón/` Entre barras. Se compone de caracteres simples o caracteres simples más especiales.

**Ejemplos:**

*simples:*
`/abc/` Busca la coincidencia exacta:
**_abc_**def

*simples más especiales:*
`/de$/` Busca la coincidencia exacta solo al final de un string.
El dedo del con**_de_**

`modificadores`(*flags*) Señalan el alcance de las búsquedas:

* `g` Global, busca en todo el texto, de lo contrario se quedaría con la primer coincidencia.

* `i` Insensible a mayúsculas y minúsculas, coincide con ambas.

* `m` Multilinea, los caracteres ^ y $ buscan al principio(^) o al final($) de **todo el texto**, activado multilinea busca al principio(^) o al final($) de la **linea**.

*Los modificadores **pueden combinarse**. `gi` `im` etc.*

<hr>

**Corchetes - Juego de caracteres**
`[abc]` busca cualquiera de los caracteres que se indican.	
`[0-9]` busca cualquier número entre los que se indican(incluídos).


**Combinar expresiones(a|b):**
Separados por barra vertical "|"

`/([abc]|es|[3-6])/` Busca cualquier caracter "a", "b", "c", más la cadenas exacta "es", más cualquiera de los dígitos "3", "4", "5", "6".

**Ejemplos usando el métodos [replace()](#):**

<!-- start code snippet: -->

<pre data-start="0"><code class="line-numbers language-javascript">

// EJEMPLO 1:
// Reemplaza las "a" por un punto "."
// gi -> todas(g) sin distinguir mayúsculas o minúsculas(i).

var texto = "Aprendiendo expresiones regulares";
var res = texto.replace(/a/gi, ".");

console.log(n);

// Resultado:
// .prendiendo expresiones regul.res

//////////////////////////////////////////////////

// EJEMPLO 2
// Busca los números 2,3,4,
// la cadena exacta "pr"
// y las letras i,e.
// Las coincidencias las reemplaza por un punto "."

var str = "1Aprendiendo 2expresiones 3regulares ";
var n = str.replace(/([2-4]|pr|[ai])/g, ".");

console.log(n);

// Resultado:
// 1A.end.endo .ex.es.ones .regul.res

// (como no hay modificador "i" la A mayúscula no se reemplaza)




//------------------------------------------------
// ver cómo Gist en Github  -->> https://gist.github.com/agustinpfs/f2732c981cb928e2f1385dabc0a0f1cf
</code></pre>

<!-- end code snippet: -->


**Metacaracteres con barra invertida "&#92;" **
Son caracteres con un significado especial. 


`\w` Busca cualquier caracter simple a-z, A-Z, 0-9 más guion bajo "_".
`\W` Busca cualquier caracter que no busca `\w`.
`\d` Busca un caracter tipo dígito 0-9.
`\D` Busca un caracter que no sea tipo dígito.
`\s` Busca un espacio en blanco.
`\S` Busca todo menos los espacios en blanco.
`\b` Busca al comienzo o final de las palabras.
`\B` Que no este al comienzo o al final de las palabras.

**Punto**

`.` Coincide con cualquier caracter.
`/n./g`
Ni u**_no_** más

**Cuantificadores. Referente a cantidades.**

`+` Busca una cadena que tenga al menos un caracter igual al que precede.
`/n+/g` bie**_n_** bie**_nnn_**

`*` Busca un string al que le puede seguir o no el caracter que precede.
`/en?/g`
bie**_n_** **_e_**s bie**_n_**nn

`*` Busca un string al que le puede seguir o no el caracter que precede, incluyendo los que se repitan.
`/en*/g`
bie**_n_** **_e_**s bie**_nnn_**

`{n}` Un número entre paréntesis indica la cantidad de veces que se repetirá secuencialmente la expresión precedente.
`/4{3}/`
1**_444_** **_444_**4

`{n,n}` Dos números entre paréntesis indica hasta la cantidad de veces posibles que pueden repetirse.
`/4{3,7}/`
44 1**_444_** **_44444_**00 **_4444444_** 56**_444444_**

`{n,}` Un número que indica el mínimo de veces que debe repetirse la secuencia.
`/4{3,}/`
41**_444_** **_44444_**

`$` Busca la coincidencia exacta al final de todo el string.
`/ola$/`
Hola Pa**_ola_**

`^` Busca la coincidencia exacta al principio de todo el string.
`/^Mar/`
**_Mar_**ía del Mar fue al mar.

`[^]` Busca todo lo que no se indica dentro de los corchetes.
`[^]`

`?=` Busca un string que sea seguido por otro string.
`/nubes(?= blanc)/` (nótese el espacio antes de blanc)
**_nubes_** blancas, nubes negras

`?!` Busca un string que no sea seguido por otro string.
`/nubes(?! blanc)/` (nótese el espacio antes de blanc)
nubes blancas, **_nubes_** negras




















aclarar y escribir uso de paréntesis (grupos, substrings.. o lo que sea.....)

cuando no es global match y exec es lo mismo. hacer ejemplos


**Paréntesis de captura.**



Parenthesis are used to capture/replace only a portion of the match.

`()` Podemos capturar una porción de un patrón encerrándolo entre paréntesis para su posterior uso como patrón aparte.
Los paréntesis no modificarán el resultado del patrón original.

*`ejemplo:`*

Usando el método [replace()](#) podemos acceder a las capturas por orden anteponiendo el signo $.
```
var tex = "abcdaBCd"
var pat = /a(b)(c)d/gi
var res = tex.replace(pat, "$2")
console.log(res); 
```

Vemos que el patrón `/a(b)(c)d/` (`pat`) es reemplazado por `$2` que indica la segunda captura, es decir `(c)` manteniendo los flags `gi`. El nuevo patrón es `/c/gi` y el resultado `cc`

Usando el método [exec()](#) podemos acceder a las capturas por orden a través del llamado a elementos de un array. `[1]...[n]`

var tex = "abcdaBCd"
var pat = /a(b)(c)d/gi
var t = pat.exec(st)
console.log(t[2]);

//Resultado
//c


ciertas expresiones dentro de un patrón convirtiéndolas en substrings.
Este patrón devolverá un array donde el 1º elemento será el mismo resultado que tendría si no tuvieran paréntesis(pero si el contenido dentro de ellos). Los elementos que le siguen al array serán los substrings pudiendo acceder a ellos a través del array [1]...[n] o con el signo dólar $1, $2... para hacer un reemplazo.
*ejemplos*


var st = "abcdaBcd"
var pat = /a(b)(c)d/gi
var res = st.replace(pat, "$2")
console.log(res);





var res = str.match(/ain/g);



??????Si le agregamos global `gm` seguirá buscando todas las coincidencias y no solo la primera que encuentre.


Coincide solo con cadenas exactas a la secuencia dada

Aprendiendo expresiones regulares

var str = "Aprendiendo1 expresiones1 regulares";
var n = str.replace(/1/g, "1º");


\b\d{3}[-.]?\d{3}[-.]?\d{4}\b

[0-9]{3}-[0-9]{3} -[0-9]{4}

agregar escape






**Enlaces relacionados:**

[*Enlaces relacionados*](#)

<em>[Editar este artículo en Github](#)</em>

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
