### Ejercicio 1: Declaración de Variables

```typescript
let nombre: string = "Juan";
let edad: number = 30;

console.log(nombre);
console.log(edad);
```

### Ejercicio 2: Uso de `let`, `const` y `var`

```typescript
let variableLet: number = 10;
const variableConst: string = "Hola";
var variableVar: boolean = true;

console.log(variableLet);
console.log(variableConst);
console.log(variableVar);
```

### Ejercicio 3: Tipos de Datos Básicos

```typescript
let numero: number = 42;
let texto: string = "Hola Mundo";
let verdadero: boolean = true;
let indefinido: undefined = undefined;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(indefinido);
```

### Ejercicio 4: Verificación de Tipos

```typescript
let numero: number = 10;
// numero = "diez"; // Esto daría un error de compilación
```

### Ejercicio 5: Inferencia de Tipos

```typescript
let numeroInferido = 10; // TypeScript infiere que es un número
let textoInferido = "Hola"; // TypeScript infiere que es un string

console.log(numeroInferido);
console.log(textoInferido);
```

### Ejercicio 6: Conversión de Tipos

```typescript
let numero: number = 10;
let texto: string = numero.toString(); // Conversión de número a string

console.log(texto);
```

### Ejercicio 7: Alcance de Variables

```typescript
function verificarAlcance() {
    var myVariable3: boolean = true;
    if (true) {
        var myVariable3: boolean = false; // Oculta la variable anterior
    }
    console.log(myVariable3); // Imprime false
}

verificarAlcance();
```

### Ejercicio 8: Manejo de Arrays

```typescript
let numeros: number[] = [1, 2, 3];
numeros.push(4); // Agrega un elemento al final
numeros.pop(); // Elimina el último elemento

for (let numero of numeros) {
    console.log(numero); // Recorre el array e imprime cada número
}
```

### Ejercicio 9: Objetos y Tipos

```typescript
let persona: { nombre: string, edad: number } = { nombre: "Carlos", edad: 25 };
console.log(persona.nombre);
persona.edad = 26;
console.log(persona.edad);
```

### Ejercicio 10: Funciones y Parámetros

```typescript
function saludar(nombre: string, edad: number, esMayor: boolean): void {
    console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y soy mayor: ${esMayor}`);
}

saludar("Ana", 30, true);
```
