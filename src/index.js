

const activo = true;

// const mensaje = (activo) ? 'Activo' : 'Inactivo'; //Ternario
const mensaje = activo && 'Activo'; //Es como si solo fuera un if, solo se ejecuta si es true la primera condicion.

console.log(mensaje);

