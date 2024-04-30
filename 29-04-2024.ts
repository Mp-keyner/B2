
// Ejercicio 1: Uniones Discriminadas
// Objetivo: Crear una Unión Discriminada para representar mensajes de chat que pueden ser de diferentes tipos: texto, imagen, o video.

// Define los tipos de mensajes:
// TextoMensaje con un campo texto de tipo string.
// ImagenMensaje con un campo url de tipo string.
// VideoMensaje con un campo url de tipo string.
// Crea una Unión Discriminada Mensaje que incluya todos los tipos de mensajes definidos.
// Escribe una función que tome un Mensaje y lo imprima en la consola de manera diferente según su tipo.

// Ejercicio 2: Record
// Objetivo: Crear un Record que mapee los tipos de mensajes a funciones que los manejen.

// Utiliza el tipo Mensaje definido en el Ejercicio 1.
// Define un tipo ManejadoresMensajes que sea un Record donde las claves son los tipos de mensajes ('texto' | 'imagen' | 'video') y los valores son funciones que toman un mensaje de ese tipo y lo manejan (por ejemplo, imprimirlo en la consola).
// Implementa las funciones de manejo para cada tipo de mensaje y asigna cada una a su correspondiente clave en el Record.
// Escribe una función que tome un Mensaje y un ManejadoresMensajes, y utilice el Record para manejar el mensaje según su tipo.

