import axios from 'axios'

export default class ApiService {
    constructor() {
      const headers = this.setHeaders()
      console.log(process.env)
      console.log(process.env.VUE_ENV_accountId)
      this.api = axios.create({
        baseURL: 'https://api.airtable.com/v0/' + process.env.accountId + '/',
        headers: headers
      })
    }
    
    setHeaders() { 
      return {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.bearerToken
      }
    }
  }