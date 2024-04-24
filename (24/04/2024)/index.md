# Declaración de Variables en TypeScript

TypeScript, como extensión de JavaScript, introduce conceptos para la declaración de variables que mejoran la seguridad de tipo y la prevención de errores comunes. A continuación, se presenta una guía sencilla para declarar variables en TypeScript.

## Uso de `let` y `const`

En TypeScript, se recomienda usar `let` y `const` para declarar variables en lugar de `var`, ya que ofrecen reglas de alcance más predecibles.

- **`let`**: Similar a `var`, pero con un alcance de bloque, lo que significa que la variable solo es accesible dentro del bloque en el que se declara.
- **`const`**: Similar a `let`, pero una vez asignada, su valor no puede ser reasignado. Esto no implica que el valor sea inmutable, solo que la referencia a la variable no puede ser cambiada.

### Ejemplos

```typescript
let nombre: string = "Juan"; // Declaración de variable con tipo
const PI: number = 3.14; // Declaración de constante con tipo
```

## Tipos de Variables

TypeScript permite especificar el tipo de una variable al momento de su declaración. Esto ayuda a evitar errores de tipo en tiempo de ejecución.

### Ejemplos

```typescript
let edad: number = 30; // Número
let esMayor: boolean = true; // Booleano
let nombre: string = "Ana"; // Cadena de texto
let hobbies: string[] = ["leer", "correr"]; // Array de cadenas
let persona: { nombre: string, edad: number } = { nombre: "Carlos", edad: 25 }; // Objeto
```

## Alcance de Variables

Las variables en TypeScript pueden tener un alcance global, de clase o local, dependiendo de dónde se declaren.

- **Alcance Global**: Variables declaradas fuera de cualquier función o clase.
- **Alcance de Clase**: Variables declaradas dentro de una clase pero fuera de sus métodos.
- **Alcance Local**: Variables declaradas dentro de funciones, bucles, etc.

### Ejemplos

```typescript
// Alcance Global
let globalVar: number = 10;

class MiClase {
    // Alcance de Clase
    static claseVar: string = "Hola";

    // Método de Clase
    miMetodo() {
        // Alcance Local
        let localVar: boolean = true;
    }
}
```

## Declaración de Variables Globales

Para declarar variables globales en TypeScript, se utiliza `declare var` para variables mutables y `declare const` para constantes.

```typescript
declare var globalVar: number;
declare const PI: number;
```