<span class="hidden-excerpt"> Creación de las claves SSH. Conectar con GitHub a través de la llave pública. Seguridad en las transferencias de datos.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/ssh-https-conexion-github.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#HTTPS y SSH (protocolos de transferencia de archivos)
*Conexión entre entorno local y remoto*

Cuando queremos conectar un repositorio de GitHub con nuestra computadora, podemos usar 2 tipos de url para hacer dicha conexión: **HTTPS** o **SSH**

![alt](http://localhost:2368/assets/images/ssh-https-github.png)

![alt](http://localhost:2368/assets/images/github-https.png)

<br>

**HTTPS** 
Este protocolo es el que recomienda GitHub porque tiene menos margen de fallos. Va a requerir 
nombre de usuario y contraseña cada vez que tengamos que transferir archivos.

**SSH**
Este protocolo se caracteriza por brindar mayor seguridad por utilizar una criptografía que hace ilegible los datos mientras son transferidos. Para utilizarlo hay que generar un par de claves SSH (SSH key pair). Una pública y una privada. Luego deberemos agregar la pública a GitHub y ya podremos usar la url SSH para realizar nuestras transferencias.


###SSH key

**Verificar si tenemos las claves.**
Es posible que nuestra máquina ya tenga generadas las claves SSH.
Abrimos la terminal y escribimos `cd ~/.ssh` y a continuación `ls`.
Si aparece el nombre del archivo `id_rsa.pub` es porque ya las tienes y no necesitas crearlas.

###Generar la claves SSH

Escribimos en la terminal `ssh-keygen -t rsa -C "your@email.com"`(cambia el email por el tuyo).
Le damos enter para dejar la ubicación por defecto. 
Luego nos pregunta si queremos agregarle una contraseña para reforzar la seguridad. Enter para no agregar.
Cuando las claves se hayan generado nos mostrará algo como esto:

```Your identification has been saved in /Users/username/.ssh/id_rsa.
Your public key has been saved in /Users/username/.ssh/id_rsa.pub.
The key fingerprint is:
01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your@email.com
The key's randomart image is:

+--[ RSA 2048]----+
|                 |
|                 |
|        . E +    |
|       . o = .   |
|      . S =   o  |
|       o.O . o   |
|       o .+ .    |
|      . o+..     |
|       .+=o      |
+-----------------+
```

Ahora podemos acceder a nuestra clave pública que GitHub nos pide.
Lo hacemos con el siguiente comando:

`cat ~/.ssh/id_rsa.pub`

Aparecerá algo como esto:


```ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA879BJGYlPTLIuc9/

R5MYiN4yc/YiCLcdBpSdzgK9Dt0Bkfe3rSz5cPm4wmehdE7GkVFXrBJ2Y

HqPLuM1yx1AUxIebpwlIl9f/aUHOts9eVnVh4NztPy0iSU/Sv0b2ODQQv

cy2vYcujlorscl8JjAgfWsO3W4iGEe6QwBpVomcME8IU35v5VbylM9ORQ

a6wvZMVrPECBvwItTY8cPWH3MGZiK/74eHbSLKA4PY3gM4GHI450Nie16

yggEg2aTQfWA1rry9JYWEoHS9pJ1dnLqZU3k/8OWgqJrilwSoC5rGjgp9

3iu0H8T6+mEHGRQe84Nk1y5lESSWIbn6P636Bl3uQ== 

your@email.com -MacBook-Pro.local
```

Lo copiamos y vamos a GitHub.

<br>

* Settings:

![alt](http://localhost:2368/assets/images/ssh-github-1.png)


<br>

* SSH and PGP keys:

![alt](http://localhost:2368/assets/images/ssh-github-2.png)


<br>

* New SSH key:

![alt](http://localhost:2368/assets/images/ssh-github-3.png)


<br>

* Title(cualquier título) - Key(pegamos el id_rsa.pub) - Add SSH key:

![alt](http://localhost:2368/assets/images/ssh-github-4.png)


Ya estamos habilitados para utilizar la url SSH para nuestra conexión con GitHub.

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/ssh-https-conexion-github.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/funcionamiento-de-github">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Github. Funcionamiento</span>
  </div>
  <a href="http://localhost:2368/git-fetch-git-pull/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Git fetch - git pull</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Fork un repositorio](http://localhost:2368/fork-un-repositorio)

[Github. Funcionamiento](http://localhost:2368/funcionamiento-de-github)

