import axios from "axios";
import * as queryString from "query-string";

let instance = axios.create({
    baseURL: "https://v1-sneakers.p.rapidapi.com/v1/",
    headers: {
        'x-rapidapi-key': '8b80a6309cmsh89a85085f6dff1fp1dd843jsn1cb6be22e37c',
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
    }
})

export const getSneakersAPI = (page=1, name="", brand="", gender="", colorway="") => {
    const query: {
        name?: string
        brand?: string
        gender?: string
        colorway?: string
        page?: number
    } = {}
    if(!!name) query.name=name
    if(!!brand) query.brand=brand
    if(!!gender) query.gender=gender
    if(!!colorway) query.colorway=colorway
    if(page!== 1) query.page = page
    return instance.get(`sneakers?limit=50&${queryString.stringify(query)}`)
}

export const getCurrentCurrencyAPI = () => {
    return axios.get(`https://api.exchangeratesapi.io/latest?base=USD`).then(res => res.data.rates)
}