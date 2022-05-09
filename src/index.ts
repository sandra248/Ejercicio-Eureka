let clave: string  = "Eureka"
let claveUsuario: string | null =prompt("Ingrese su CLAVE")
let intento: number = 3
let contador: number = 1


if (claveUsuario === clave) {
  console.log("Salió del Programa");
} else {
    for (contador = 1;  contador <=3; contador++) {
      intento = Number(prompt("CLAVE INCORRECTA, ingrese nuevamente su CLAVE"+ contador + ":" );
    }
console.log("Usuario Bloqueado")
  }
  
 
  




