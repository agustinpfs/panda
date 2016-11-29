<span class="hidden-excerpt"> Como mantener sincronizado nuestro repositorio local con los remotos. Fusionar los datos.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/git-fetch-git-pull.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Git fetch y git pull. 
==Actualizando el repositorio local con datos del repositorio remoto.==

##Git fetch

`git fetch` nos descarga a nuestro entorno local las actualizaciones del repositorio remoto.
Estos datos pueden ser porque estamos trabajando en equipo y otro miembro haya subido cambios, o que nosotros mismos hayamos agregado datos desde la propia página de GitHub. Con `git fetch` podremos mantener actualizado nuestro repositorio local.

Por ello, **siempre antes de ponernos a trabajar** ejecutamos el comando:

`git fetch origin`

Si hay datos se descargan en una rama oculta llamada `origin/master`.

Para fusionarlos con nuestra rama `master` haremos un [`merge`](http://localhost:2368/trabajar-con-ramas-git)

`git merge origin/master`


Siguiendo con el ejemplo vamos a agregar una licencia a nuestro repositorio desde GitHub.

En la página principal de nuestro repositorio vamos a "Create new file".
En el campo "Name your file" escribimos "license". Aparecerá a la derecha un desplegable "Choose a license" en donde podremos elegir una licencia.
Una vez elegida, agregamos la descripción en el campo debajo del título "Commit new file" y clickeamos en "Commit new file".

Ahora tenemos un nuevo archivo y un nuevo commit en nuestro repositorio remoto.

Ahora, en la terminal de nuestra computadora, en la carpeta de nuestro proyecto, escribimos el comando:

 `git fetch origin`

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git fetch origin</p>
  <p>remote: Counting objects: 3, done.</p>
  <p>remote: Compressing objects: 100% (3/3), done.</p>
  <p>remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0</p>
  <p>Unpacking objects: 100% (3/3), done.</p>
  <p>From https://github.com/pandawebs/practicasGit</p>
  <p>   354d93c..9129e79  master     -> origin/master</p>
</div>

Nos muestra que ha habido cambios en el repositorio remoto (se creó el archivo de la licencia).

Si no hubiese cambios no nos muestra nada.

Este paso es importante hacerlo cuando se está trabajando en equipo porque nos avisa que debemos actualizar nuestro repositorio local antes de realizar y subir nuestros cambios, ya que si los cambios fueron en el mismo archivo podríamos crear un conflicto.

Si ha habido cambios lo fusionaremos con `git merge origin/master` y nuestro repositorio local estará actualizado y sincronizado con el repositorio remoto.


##Git pull

Es un `git fetch` seguido de un `git merge`

En nuestro ejemplo haciendo 

`git pull origin master` 

sería lo mismo que 

`git fetch origin` más `git merge origin/master`

> Estos comandos son fundamentales antes de ponernos a trabajar para asegurarnos de que lo haremos sobre la última versión.

> A esto se le debe sumar una buena comunicación entre los miembros del equipo para no trabajar sobre un mismo archivo a la vez.

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/git-fetch-git-pull.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/ssh-https-conexion-github">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>SSH - HTTPS - conexión GitHub</span>
  </div>
  <a href="http://localhost:2368/clonar-un-repositorio/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Git clone. Clonar un repositorio.</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Pull request](http://localhost:2368/pull-request)

[Git clone. Clonar un repositorio](http://localhost:2368/clonar-un-repositorio)

