import axios from "axios";
import * as queryString from "query-string";

let instance = axios.create({
    baseURL: "https://api.thesneakerdatabase.com/v1/"
})

export const getSneakersAPI = (page=1, name="", brand="", gender="", colorway="") => {
    const query = {}
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