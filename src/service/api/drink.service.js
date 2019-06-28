import ApiService from './api.service'

export default class DrinkService extends ApiService {
    constructor() {
        super()
    }

    fetchDrinks() {
        return this.api.get('/Drinks')
    }
}