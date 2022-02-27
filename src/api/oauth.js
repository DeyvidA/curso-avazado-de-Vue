// oauth.js

// Traemos el método post de 'axios'
import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard

const clientId = '99427fb058474145a75754fd1da23872'
const clientSecret = 'dD8aQ2xRiwsHjjelyqCv9fuiB7qzhG5c'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

// Creamos la función getToken
function getToken () {
  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData()

  // Con 'append', le agregamos la clave 'grant_type' y el valor 'client_credentials'
  body.append('grant_type', 'client_credentials')

  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    // Nuestros datos de cliente para OAuth: id y secret
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

// Exportamos la función para poder usarla más tarde
export {
  getToken
}
