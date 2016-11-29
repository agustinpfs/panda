<span class="hidden-excerpt"> Qué es y cómo hacer un fork en GitHub. Diferencia con git clone. Comandos. Sincronización con el repositorio original - upstream. </span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/fork-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Fork un repositorio.

==Fork copia cualquier repositorio público de Github a nuestra cuenta. 
Este se agregará a nuestra lista de repositorios en GitHub.==

Fork nos permite trabajar sobre cualquier repositorio público de Github, sin afectar el original.

![alt](http://localhost:2368/assets/images/fork-git.png)


La **diferencia entre fork y clone** es que fork es una copia de un repositorio remoto a otro remoto, y [clone](http://localhost:2368/clonar-un-repositorio) es una copia de un repositorio remoto a nuestra computadora.

Fork nos permite editar cualquier proyecto con las herramientas de colaboración que nos ofrece GitHub. Por ejemplo trabajar remotamente con miembros de nuestro equipo sobre cualquier proyecto público y proponer cambios haciendo [pull requests](http://localhost:2368/pull-request).



###Mantener actualizado nuestro repositorio fork con el original(upstream).

Para mantener actualizado nuestro fork, primero conectamos nuestro repo local con el original a través del comando:


`git remote add upstream [url HTTPS o SSH del repositorio original]`
<small>- Para usar SSH [genera la clave](http://localhost:2368/ssh-https-conexion-github) -</small>


`upstream` es el nombre que se le da al repositorio original a la hora de hacer la conexión.

>Una conexión con `upstream` permite descargar los cambios efectuados en el repositorio original pero no permite cargar datos. 
Igual podemos proponer cambios haciéndolos en nuestro fork y luego enviando un [pull requests](http://localhost:2368/pull-request).

<br>

###Ejemplo práctico:

Primero haces un fork al repositorio de nuestro ejemplo dándole al botón "fork".

![alt](http://localhost:2368/assets/images/fork-git.png)

Luego lo [clonas](http://localhost:2368/clonar-un-repositorio) en tu computadora:
<small>En este ejemplo usamos HTTPS como conexión. Para usar SSH [genera la clave](http://localhost:2368/ssh-https-conexion-github).</small>


`git clone https://github.com/tuNombreUsuario/practicasGit.git`

Lo conectas con tu repositorio "fork"

`git remote add origin https://github.com/tuNombreUsuario/practicasGit.git`

Ahora lo conectas con el original:

`git remote add upstream https://github.com/Pandawebs/practicasGit.git`

Verificamos si se ha guardado las conexiones `origin` y `upstream`:

`git remote -v`

<div class="console">
  <p>tuNombreUsuario@example-MacBook-Pro practicasGit $ git remote -v</p>
  <p>origin	https://github.com/tuNombreUsuario/practicasGit.git (fetch)</p>
  <p>origin	https://github.com/tuNombreUsuario/practicasGit.git (push)</p>
  <p>upstream	https://github.com/Pandawebs/practicasGit.git (fetch)</p>
  <p>upstream	https://github.com/Pandawebs/practicasGit.git (push)</p>
</div>

<br>

Ahora comprobamos si ha habido cambios en el repo original y los traemos a nuestro local:

`git fetch upstream`

También podemos ver si ha habido cambios desde Github:

![alt](http://localhost:2368/assets/images/cambios-fork-original.png)



Hacemos un merge si hubo cambios. Esto fusionará dichos cambios del repositorio original con nuestro repositorio local.

`git merge upstream/master`


Ya actualizado nuestro repositorio local podemos actualizar el fork de nuestra cuenta en GitHub:

`git push origin master`

Si vamos a Github y refrescamos podremos ver que se ha actualizado nuestro repositorio.

>Si queremos mantener actualizado nuestro fork con el original, los cambios o evolución por nuestra parte los debemos hacer en distintas ramas para evitar conflictos.

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/fork-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->



<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/clonar-un-repositorio">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Git clone. Clonar un repositorio.</span>
  </div>
  <a href="http://localhost:2368/pull-request/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Pull request</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

- [Github. Funcionamiento](http://localhost:2368/funcionamiento-de-github)

- [Ejemplo de flujo de trabajo con Git](http://localhost:2368/ejemplo-de-flujo-de-trabajo-con-git)

- [Git fetch - git pull](http://localhost:2368/git-fetch-git-pull)

- [Pull request](http://localhost:2368/pull-request)

