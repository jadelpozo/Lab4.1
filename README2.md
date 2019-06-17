#Lab5

DNS ECS: EC2Co-EcsEl-1HAPG9A2W3BOV-1090947888.us-east-1.elb.amazonaws.com:3000

Este proyecto se realizo una aplicacion web en node.js. La aplicación consistia en un CRUD de peliculas donde las personas pueden ver, agregar, editar y eliminar datos.
La aplicación esta conectada a una base de datos montada en RDS de AWS de MySQL. 

#Instrucciones para construir la imagen.

1. Se creo un archivo Dokerfile donde se copiaban los archivos del CRUD y se descargaba la ultima imagen de node. Al final del archivo se corria un comando "node app.js"
para que funcione la app.

2. Luego se construyo la imagen a partir del Dockerfile con el comando "docker build -t <usuario docker hub>/node-web-app" nombrando asi a la imagen "node-web-app".

3. Despues se hizo pruebas con la imagen y al ver que si funcionaba la app se procedio a darle un tag y subirla a docker hub.

4. Se le puso el tag "lab5_v1" y despues se uso el comando "docker login" para iniciar secion y ya poder subir la imagen con el comando "docker push jadelpozo2696/node-web-app:lab5_v1"
se subio la imagen a docker hub para su uso posterior en un ECS de AWS.

#Instrucciones para usar imagen.

1. Descargar el archivo docker-compose y la carpeta db-init.

2. Correr el comando docker-compose up.

3. Entrar al localhost:3000.

4. Agregar datos en la pagina web.

#Documentación de la puesta en marcha en ECS

1. En AWS se creo un ECS en donde se dio en la opcion Getting Started. Ahí se creo un container en donde se modifico la imagen y se coloco la creada previamente "jadelpozo2696/node-web-app:lab5_v1".

2. Luego en las Task definition se dejaron las opciones default.

3. Despues se definio el servicio y se coloco que solo se desea una task y se creo un Application Load Balancer para así tener un DNS donde poder ver la app web.

4. Se definio el puerto 3000 con el protocolo HTTP para que se pueda conectar con la aplicación.

5. Se creo un cluster y se le puso de nombre CVirt con una VPC y una Subnet creada automaticamente.

6. Se reviso por ultima vez las configuraciones y se creo el servicio de ECS.

7. La task se configuro correctamente pues su status es de ACTIVO.

8. Se reviso la app web desde el DNS del Application load balancer creado previamente.

9. La aplicacion funciono correctamente desde la pagina: EC2Co-EcsEl-1HAPG9A2W3BOV-1090947888.us-east-1.elb.amazonaws.com:3000

   
