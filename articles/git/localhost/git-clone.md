<span class="hidden-excerpt"> Como clonar un repositorio de GitHub a través de la terminal. Ejemplo. Repositorio para prácticas.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/clonar-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Clonar un repositorio

Otra común manera de comenzar a trabajar con un repositorio es clonando uno existente. Esto crea una copia del repositorio en nuestra computadora. No necesitamos ni crear carpeta ni ejecutar `git init`. 
Clonar un repositorio es la manera rápida y eficáz de descargar un proyecto de un servidor remoto a nuestra computadora para testearlo, ejecutarlo, modificarlo, etc.

`git clone [dirección url HTTPS ó SSH]` [generar la clave SSH](http://localhost:2368/ssh-https-conexion-github/ " target="_blank)

##Clonar un repositorio de Github

Copiamos la dirección HTTPS en este caso:

![alt](http://localhost:2368/assets/images/clonar-un-repositorio.png)

> Para utilizar la dirección SSH debemos [generar la clave SSH](http://localhost:2368/ssh-https-conexion-github/ " target="_blank)

Abrimos la terminal, vamos al directorio donde queremos que se clone el repositorio y escribimos `git clone` seguido de la dirección que copiamos. HTTPS en este caso:

`git clone https://github.com/pandawebs/practicasGit.git`

Esto creará una carpeta con el nombre de practicasGit.
Esta incluirá toda la historia del proyecto. Es decir, una copia de todos los datos que tiene el servidor de ese repositorio con sus respectivos commits y sus versiones.

Si queremos que se clone con otro nombre de carpeta agregamos un espacio y el nuevo nombre.
Supongamos que en vez de llamarse "practicasGit" queremos que se llame "practicas-Git". Cuando vayamos a clonar escribimos:

`git clone https://github.com/pandawebs/practicasGit.git practicas-Git`

<br>
[Repositorio de Práctica](https://github.com/Pandawebs/practicasGit " target="_blank)
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/clonar-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/git-fetch-git-pull">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Git fetch - git pull</span>
  </div>
  <a href="http://localhost:2368/fork-un-repositorio/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Fork un repositorio</span>
    </div>
  </a>
</div>
<br>


**Enlaces relacionados:**

[Cómo crear un repositorio](http://localhost:2368/crear-un-repositorio)

[Fork un repositorio](http://localhost:2368/fork-un-repositorio)


