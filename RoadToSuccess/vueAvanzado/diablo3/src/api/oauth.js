// Treaemos el metodo post de axios
import { post } from 'axios'

const clientId = '99427fb058474145a75754fd1da23872'
const clientSecret = 'dD8aQ2xRiwsHjjelyqCv9fuiB7qzhG5c'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `httms://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credential')

  const config = {
    headers: { Content_Type: 'multipart/form-data' },

    auth: { username: clientId, password: clientSecret }
  }
  return post(API_URL, body, config)
}

export {
  getToken
}
