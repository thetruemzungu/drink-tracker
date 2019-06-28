import ApiService from './api.service'

export default class CustomerService extends ApiService {
    constructor() {
        super()
    }

    fetchCustomers() {
        return this.api.get('/Customers')
    }
}