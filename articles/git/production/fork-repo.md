<span class="hidden-excerpt"> Qué es y cómo hacer un fork en GitHub. Diferencia con git clone. Comandos. Sincronización con el repositorio original - upstream. </span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/fork-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Fork un repositorio.

==Fork copia cualquier repositorio público de GitHub en nuestra cuenta. 
Este se agregará a nuestra lista de repositorios en GitHub.==

Fork nos permite trabajar sobre cualquier repositorio público de GitHub, sin afectar el original.

![alt](http://pandawebs.net/assets/images/fork-git.png)


La **diferencia entre fork y clone** es que fork es una copia de un repositorio remoto a otro remoto, y [clone](http://pandawebs.net/clonar-un-repositorio) es una copia de un repositorio remoto a nuestra computadora.

Fork nos permite editar cualquier proyecto con las herramientas de colaboración que nos ofrece GitHub. Por ejemplo trabajar remotamente con miembros de nuestro equipo sobre cualquier proyecto público y proponer cambios haciendo [pull requests](http://pandawebs.net/pull-request).


<a name="ejemplo"></a>
###Mantener actualizado nuestro repositorio fork con el original(upstream).

>`upstream` es el nombre que se le da al repositorio original a la hora de conectarlo con nuestro repositorio.

Suponte que has hecho un clon del repositorio fork en tu computadora y estás trabajando en el proyecto.

Con `git remote add upstream [url HTTPS o SSH del repositorio original]` conectarás tu repositorio con el original. 

<small>- Para usar SSH [genera la clave](http://pandawebs.net/ssh-https-conexion-github) -</small>

Luego con el comando `git fetch upstream` podrás saber si hubo cambios en el original. Si los hubo, con `git merge upstream/master` los puedes fusionar con tu repositorio.

Cuando subas tu cambios a GitHub con `git push origin master` tu repositorio fork estará actualizado.

>Una conexión con `upstream` permite descargar los cambios efectuados en el repositorio original pero no permite cargar datos. 
Igual podemos proponer cambios haciéndolos en nuestro fork y luego enviando un [pull requests](http://pandawebs.net/pull-request).

<br>

###Ejemplo práctico fork y upstream:

Primero haces un fork al repositorio de nuestro ejemplo dándole al botón "fork".

![alt](http://pandawebs.net/assets/images/fork-git.png)

Luego lo [clonas](http://pandawebs.net/clonar-un-repositorio) en tu computadora:
<small>En este ejemplo usamos HTTPS como conexión. Para usar SSH [genera la clave](http://pandawebs.net/ssh-https-conexion-github).</small>


`git clone https://github.com/tuNombreUsuario/practicasGit.git`


Ya estás conectado con tu repositorio fork (origin).

Ahora lo conectas con el repositorio original (upstream):

`git remote add upstream https://github.com/Pandawebs/practicasGit.git`

Verificamos si se ha guardado las conexiones `origin` y `upstream` con:

`git remote -v`

<div class="console">
  <p>tuNombreUsuario@example-MacBook-Pro practicasGit $ git remote -v</p>
  <p>origin https://github.com/tuNombreUsuario/practicasGit.git (fetch)</p>
  <p>origin https://github.com/tuNombreUsuario/practicasGit.git (push)</p>
  <p>upstream https://github.com/Pandawebs/practicasGit.git (fetch)</p>
  <p>upstream https://github.com/Pandawebs/practicasGit.git (push)</p>
</div>

<br>

Ahora comprobamos si ha habido cambios en el repo original y los traemos a nuestro local:

`git fetch upstream`

También podemos ver si ha habido cambios desde Github:

![alt](http://pandawebs.net/assets/images/cambios-fork-original.png)

Hacemos un merge si hubo cambios. Esto fusionará dichos cambios del repositorio original con nuestro repositorio local.

`git merge upstream/master`

Ya actualizado nuestro repositorio local podemos actualizar el fork de nuestra cuenta en GitHub:

`git push origin master`

Si vamos a Github y refrescamos podremos ver que se ha actualizado nuestro repositorio.

>Si queremos mantener actualizado nuestro fork con el original, los cambios o evolución por nuestra parte los debemos hacer en distintas ramas para evitar conflictos.

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/fork-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->



<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/clonar-un-repositorio">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Git clone. Clonar un repositorio.</span>
  </div>
  <a href="http://pandawebs.net/pull-request/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Pull request</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

- [Github. Funcionamiento](http://pandawebs.net/funcionamiento-de-github)

- [Ejemplo de flujo de trabajo con Git](http://pandawebs.net/ejemplo-de-flujo-de-trabajo-con-git)

- [Git fetch - git pull](http://pandawebs.net/git-fetch-git-pull)

- [Pull request](http://pandawebs.net/pull-request)

