<span class="hidden-excerpt">¿Cómo funciona GitHub? Conectar con repositorio local. Transferencia de archivos a través de protocolos de conexión. Actualizar repositorios.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/funcionamiento-de-github.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Funcionamiento de GitHub

##GitHub

GitHub permite publicar proyectos con Git y nos ofrece herramientas 
para compartir, colaborar en proyectos y trabajar en equipo.

Hasta ahora hemos trabajado con un repositorio local donde todo ocurre en nuestra computadora.
GitHub permite que conectemos nuestro repositorio local a su red pública para mostrarlo al mundo y acceder a colaboradores y herramientas para poder desarrollar junto a un equipo de forma remota, segura y efectiva.

Siguiendo con el ejemplo que venimos trabajando, vamos a subir nuestro repositorio a GitHub.

1. Vamos a [GitHub](https://github.com)  y nos creamos una cuenta.

2. En la página de nuestro perfil vamos a Repositories > New

![alt](http://pandawebs.net/assets/images/crear-repo.png)

Una vez que clickeamos en "New" aparecerán los campos y opciones para crear nuestro nuevo repositorio remoto.
Ponemos un nombre. En este ejemplo lo llamaremos "practicasGit".
Luego podemos poner una descripción que es opcional.

Acción siguiente nos da la posibilidad de crear un README. Esto será útil si no tenemos ya creado un repositorio en local, es decir que primero lo creamos en GitHub para luego hacerle una copia como repositorio local. 
Como nosotros ya lo tenemos y lo que queremos es subirlo a GitHub, no marcamos el casillero que dice "Initialize this repository with a README".

De momento dejamos en "none" Add .gitignore y Add license.

Le damos a "Create repository"

Aparece una página con varias opciones que podemos utilizar como modelo para hacer la conexión y dar inicio al repositorio remoto.
Nosotros como queremos subir un repositorio existente haremos los pasos que nos muestra la opción que dice "…or push an existing repository from the command line"

En primer lugar elegimos y copiamos la dirección HTTPS.

![alt](http://pandawebs.net/assets/images/github-https.png)

> Para utilizar la dirección SSH debemos [generar la clave SSH](http://pandawebs.net/ssh-https-conexion-github/ " target="_blank)

Utilizamos el comando `git remote add origin` seguido de la dirección que vayamos a utilizar. HTTPS en este caso:

`git remote add origin https://github.com/Pandawebs/practicasGit.git`

*Para verificar que los repositorios están conectados:*

`git remote -v`

Al ejecutar este comando debe aparecer dos veces la dirección https que utilizamos para hacer la conexión.
Esta dirección conectará los repositorios cuando se realice fetch y push.

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git remote -v</p>
  <p>origin  https://github.com/Pandawebs/practicasGit.git (fetch)</p>
  <p>origin  https://github.com/Pandawebs/practicasGit.git (push)</p>
</div> 

<br>

##Git push 
**Subir - empujar un repositorio al servidor remoto(GitHub).**

Para ir subiendo las actualizaciones de nuestro proyecto a GitHub o a cualquier otro servidor remoto.

`git push [nombre-remoto][nombre-rama]`

En nuestro caso el comando será:

`git push origin master`

<i class="color-title">origin</i> es el nombre predeterminado que le da Git al servidor remoto con el que se está trabajando.
<i class="color-title">master</i> porque se refiere al nombre de la rama en la que estamos trabajando.

Realizar este comando implica haber hecho antes un commit, de lo contrario nos dará un error con aviso de que hay archivos que se han cambiado y no están siendo seguidos por Git.

No es necesario hacer el `push` después de cada commit. Cuando lo hagamos subirán todos, aunque se recomienda hacerlo en cada commit, sobre todo si se está trabajando en equipo.

En nuestro ejemplo aún se encuentra vacío el repositorio remoto que creamos en GitHub.

Vamos a la terminal y escribimos `git status` para asegurarnos de que no haya cambios por agregar a git.

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git status</p>  
  <p>On branch master</p>
  <p>nothing to commit, working directory clean</p>
</div>

Escribimos el comando `git push origin master`

Nos pedirá nombre de usuario y contraseña de GitHub.

Luego de autenticar, nuestro repositorio remoto pasará a tener los mismos archivos que el proyecto local con sus commits asentados en la sección de commits de GitHub.


Refrescamos nuestro GitHub y vemos nuestro README.md que creamos en nuestro repositorio local ya aparece junto con los commits correspondientes. 


![alt](http://pandawebs.net/assets/images/commits-github.png)


<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/funcionamiento-de-github.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/git-reset">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Git reset</span>
  </div>
  <a href="http://pandawebs.net/ssh-https-conexion-github/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>SSH - HTTPS - conexión GitHub</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Fork un repositorio](http://pandawebs.net/fork-un-repositorio)

[Git fetch - git pull](http://pandawebs.net/git-fetch-git-pull)

[SSH - HTTPS - conexión GitHub](http://pandawebs.net/ssh-https-conexion-github)


