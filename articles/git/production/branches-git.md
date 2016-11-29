<span class="hidden-excerpt"> ¿Qué son las ramas en Git? Donde y como usarlas, crearlas y hacer fusiones. Ejemplos.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/trabajar-con-ramas-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Trabajar con ramas en Git

![ramas git definición](http://pandawebs.net/assets/images/ramas-git.png)

##Ramas (branches)

==Una rama es una linea de tiempo por la que avanza un proyecto.== Cuando hacemos el primer commit en un repositorio ya se crea por defecto la rama llamada `master`. Esta será la rama estable y principal. A la vez se pueden crear en cualquier momento más ramas para pruebas y propuestas de miembros del equipo o de terceros. 
Las ramas se pueden fusionar entre si y renombrar.

<br>

**Propuesta de un integrante del equipo**

Si estamos trabajando en equipo y un integrante quiere proponer un cambio o una evolución del proyecto, crea una nueva rama que tendrá de base todos los datos hasta el último commit.
En la nueva rama, el integrante del equipo trabajará en su propuesta, y todo lo que haga, los cambios, los commits y las descripciones, no afectrán a la rama `master` o linea principal.
Una vez que haya finalizado su trabajo, lo pone a disposisión del equipo y si el equipo lo aprueba, se fusiona(merge) con la rama principal(master).

<br>

**Pull Request**

Para proponer no hace falta ser miembro de un equipo, por eso, las ramas se usan también
para hacer propuestas a proyectos públicos a través de Pull Requests.
([Qué es un pull request y cómo hacerlo](http://pandawebs.net/pull-request))

<br>

**Trabajo propio**

También si trabajamos solos podemos hacer varias ramas para testear o probar distintas resoluciones en la evolución del proyecto para luego fusionar la que creamos conveniente.

<br>

>**HEAD.**
Hace referencia a la rama actual. Más presisamente apunta al último commit de la rama en la que estamos trabajando.

>Cada rama irá avanzando automáticamente con cada commit.
Cuando creamos otra rama, esta nace con toda la base de la rama madre (master en nuestro caso).

>Es importante la comunicación entre los miembros del equipo y evitar trabajar en mismos archivos ya que podrían ocasionar conflictos al fusionar ramas.

<br>

##Crear una rama

`git branch [nombre de rama]`

Para nuestro ejemplo crearemos una rama y le llamamos `prueba1`.
En la terminal, en la carpeta del proyecto(practicasGit):

`git branch prueba1`

Para trabajar en la nueva rama nos pasamos de la rama master a la nueva rama.

`git checkout [nombre de rama]`

En nuestro ejemplo:

`git checkout prueba1`

==A partir de ahora el avance del proyecto lo estamos realizando en la rama `prueba1`==

En esta nueva rama vamos a editar el README.md. Agregamos licencia:

README.md
```# Curso Git y GitHub.

## Autor

* Agustin Palmieri

## Contacto

* email: agustinpfs[at]gmail[dot]com

## Licencia

MIT License
```

Comprobamos que se haya modificado: `git status`

Luego añadimos el archivo al staging area: `git add README.md`

Y hacemos el commit: `git commit -m "Agregamos licencia MIT al README.md"`


<br>

###Fusiones(merge)


Si la propuesta de una rama es aceptada deberemos fusionarla con la rama principal o con la que nos interese.
Para ello, en nuestro ejemplo lo hacemos desde la rama master.
Primero corroboramos en que rama estamos con el comando `git branch` 
Nos mostrará una lista de nuestras ramas y señalada con un asterísco la rama actual.

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git branch</p> 
	<ul style="list-style: none">
		<li> master</li>
		<li>* prueba1</li>
	</ul>
</div>


Cómo estamos en la rama `prueba1` nos pasaremos a la rama `master`

`git checkout master`

Comprobamos el cambio con `git branch`

Ahora fusionamos con la rama `prueba1` que es la que nos interesa.

`git merge prueba1`

Si no hay conflicto las ramas quedarán fusionadas. Vemos que en la terminal nos muestra de que hubo un "Fast-forward" Lo que significa de que no se pisaron datos y la fusión se hizo sin inconvenientes.

<div class="console">
 	<p>agustin@pandawebs-MacBook-Pro practicasGit $ git merge prueba1</p>
	<p>Updating 8bdb53e..97ef186</p>
	<p>Fast-forward</p>
	<p> README.md | 5 +++++</p>
	<p> 1 file changed, 5 insertions(+)</p>
</div> 

Si hacemos un `git log` veremos que nuestra rama `master` ya cuenta con los cambios y commits de la rama `prueba1` que acabamos de fusionar.


**Conflicto en ramas**
Puede suceder que por mala comunicación entre miembros del equipo, se haya editado un mismo contenido en un mismo archivo y una misma linea en distintas ramas. Esto generará un conflicto y nos dará un error.

Supongamos que alguien también había agregado la licencia en el README.md pero distinto contenido y desde la rama `master`

README.md
```# Curso Git y GitHub.

## Autor

* Agustin Palmieri

## Contacto

* email: agustinpfs[at]gmail[dot]com

## Licencia

Apache License 2.0
```

En rama `master`:

`git add README.md`

`git commit -m "Actualizo README"`

Al hacer el merge saltará el conflicto:

<div class="console">
 	<p>agustin@pandawebs-MacBook-Pro practicasGit $ git merge prueba1</p>
	<p>Auto-merging README.md</p>
	<p>CONFLICT (content): Merge conflict in README.md</p>
	<p>Automatic merge failed; fix conflicts and then commit the result.</p>
</div> 

Si abrimos el archivo en cuestión (README.md en este caso), vemos que aparece el contenido que se pisa. El de la rama `master` (HEAD) y el de la rama `prueba1`.

README.md
```# Curso Git y GitHub.
## Autor

* Agustin Palmieri

## Contacto

* email: agustinpfs[at]gmail[dot]com

## Licencia

<<<<<<< HEAD

Apache License 2.0

=======

MIT License

>>>>>>> prueba1
```

Elegimos la que vamos a dejar y borramos la otra junto con los nombres y los símbolos que aparecen y no forman parte de nuestro código.
En este caso dejamos los cambios de la rama `prueba1`.

README.md
```# Curso Git y GitHub.

## Autor

* Agustin Palmieri

## Contacto

* email: agustinpfs[at]gmail[dot]com

## Licencia

MIT License
``` 
Lo agregamos al staging area `git add -A`. 

Y hacemos un nuevo commit `git commit -m "solucionamos conflicto de la fusión"`.

<br>

**Para borrar una rama**

`git branch -d nombre-de-rama`

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/trabajar-con-ramas-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/ejemplo-de-flujo-de-trabajo-con-git">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Ejemplo de flujo de trabajo con Git</span>
  </div>
  <a href="http://pandawebs.net/git-reset/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Git reset</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Git clone. Clonar un repositorio](http://pandawebs.net/constructor-de-objetos-javascript/)

[Git reset](http://pandawebs.net/git-reset)

