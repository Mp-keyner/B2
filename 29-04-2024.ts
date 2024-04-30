
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

// Definición de los tipos de mensajes
type TextoMensaje = { tipo: "texto"; texto: string };
type ImagenMensaje = { tipo: "imagen"; url: string };
type VideoMensaje = { tipo: "video"; url: string };

// Unión Discriminada Mensaje
type Mensaje = TextoMensaje | ImagenMensaje | VideoMensaje;

// Función para manejar mensajes
function manejarMensaje(mensaje: Mensaje): void {
  switch (mensaje.tipo) {
    case "texto":
      console.log(`Mensaje de texto: ${mensaje.texto}`);
      break;
    case "imagen":
      console.log(`Mensaje de imagen: ${mensaje.url}`);
      break;
    case "video":
      console.log(`Mensaje de video: ${mensaje.url}`);
      break;
  }
}

manejarMensaje({
  tipo: "imagen",
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbL5G2Ip4LcTQHSxfXHpRxwC6mLs7FLKJq90w242HVnw&s",
});

// Definición del tipo ManejadoresMensajes
// type ManejadoresMensajes = {
//     texto: (mensaje: TextoMensaje) => void;
//     imagen: (mensaje: ImagenMensaje) => void;
//     video: (mensaje: VideoMensaje) => void;
//    };

// Implementación de las funciones de manejo
//    const manejadores: ManejadoresMensajes = {
//     texto: (mensaje) => console.log(`Manejando mensaje de texto: ${mensaje.texto}`),
//     imagen: (mensaje) => console.log(`Manejando mensaje de imagen: ${mensaje.url}`),
//     video: (mensaje) => console.log(`Manejando mensaje de video: ${mensaje.url}`),
//    };

//    // Función para manejar mensajes utilizando el Record
//    function manejarMensajeConRecord(mensaje: Mensaje, manejadores: ManejadoresMensajes): void {
//     switch (mensaje.tipo) {
//        case 'texto':
//          manejadores.texto(mensaje);
//          break;
//        case 'imagen':
//          manejadores.imagen(mensaje);
//          break;
//        case 'video':
//          manejadores.video(mensaje);
//          break;
//     }
//    }
