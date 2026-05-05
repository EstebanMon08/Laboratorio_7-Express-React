# Express vs HTTP nativo
## HTTP nativo
El modulo http viene incluido en Node.js y permite crear servidores desde cero. Para manejar rutas hay que comparar manualmente la URL con condicionales if/else. Tambien hay que configurar los headers manualmente y usar JSON.stringify para enviar datos.


## Express
Express es una libreria que se instala con npm. Tiene metodos como app.get() y app.post() para definir rutas de forma mas ordenada. Para enviar JSON solo se usa res.json() y los headers se configuran solos.


## Diferencias principales
El codigo con http tiende a volverse grande y dificil de leer porque todo va en una sola funcion. Con Express el codigo queda mas organizado y es mas facil agregar funcionalidades nuevas.

Con http manejar un error 404 requiere acordarse de poner un else al final. Con Express se agrega un middleware con app.use() al final y captura cualquier ruta no definida.

En resumen, http es util para aprender como funcionan los servidores pero Express es mejor para proyectos reales.