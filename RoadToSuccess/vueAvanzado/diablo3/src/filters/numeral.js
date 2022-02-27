// Paso 1: Importar la librería
import numeral from 'numeral'

// Paso 2: Crear la función que será nuestro filtro Vue
// Función que recibe un argumento (Número o String numérico) y lo devuelve formateado
// Si no hay numero, devolvemos 0
const formatNumber = num => !num ? 0 : numeral(Number(num)).format()

// Paso 3: Exportar la función para que pueda ser usada
export {
  formatNumber
}
