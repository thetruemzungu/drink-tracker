import axios from 'axios'

export default class ApiService {
    constructor() {
      const headers = this.setHeaders()
      this.api = axios.create({
        baseURL: 'localhost:3000',
        headers: headers
      })
    }
  
    setHeaders() {
    }
  }