import {getCurrentCurrencyAPI, getSneakersAPI} from "../Components/dal/api"

let initialState = {
    sneakers: [] as any,
    isLoading: true,
    currentPage: 1,
    totalCount: 0,
    term: "",
    brand: "",
    colorway: "",
    gender: "",

    cart: [] as any,
    finalPrice: 0,

    currentCurrency: "USD",
    currencyRates: {},
    rate: 1,
}

type initialStateType = typeof initialState

type ActionsType =
    setSneakersType
    | setLoadingType
    | setCurrentTermType
    | setCurrentPageType
    | setTotalCountType
    | addToCartType
    | deleteItemType
    | addItemType
    | deleteFromCartType
    | setCurrentCurrencyType
    | setCurrencyRatesType
    | setRateType

export const homepageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_SNEAKERS":
            return {...state, sneakers: action.sneakers}
        case "SET_LOADING":
            return {...state, isLoading: action.boolean}
        case "SET_CURRENT_TERM":
            return {...state, ...action.currentTerm}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalCount: action.totalCount}
        case "ADD_TO_CART":
            let cartItem = {
                ...action.product,
                count: 1
            }
            if (!state.cart.some((e: any) => e[0].id === action.product[0].id)) {
                return {...state, cart: [...state.cart, cartItem]}
            } else {
                return {
                    ...state, cart: state.cart.map((e: any) => {
                        if (e[0].id === action.product[0].id && e.count < 10) {
                            return {...e, count: e.count + 1}
                        } else return e
                    })
                }
            }
        case "DELETE_FROM_CART":
            return {...state, cart: state.cart.filter((item: any) => item[0].id !== action.id)}
        case "DELETE_ITEM":
            return {
                ...state, cart: state.cart.map((e: any) => {
                    if (e[0].id === action.id && e.count > 0) {
                        return {...e, count: e.count - 1}
                    } else return e
                })
            }
        case "ADD_ITEM":
            return {
                ...state, cart: state.cart.map((e: any) => {
                    if (e[0].id === action.id && e.count < 10) {
                        return {...e, count: e.count + 1}
                    } else return e
                })
            }
        case "SET_CURRENT_CURRENCY":
            return {...state, currentCurrency: action.currency}
        case "SET_CURRENCY_RATES":
            return {...state, currencyRates: action.rates}
        case "SET_RATE":
            //@ts-ignore
            return {...state, rate: state.currencyRates[`${action.currency}`]}
        default:
            return state
    }
}
type setRateType = {
    type: "SET_RATE"
    currency: string
}
type setCurrencyRatesType = {
    type: "SET_CURRENCY_RATES"
    rates: any
}
type deleteItemType = {
    type: "DELETE_ITEM"
    id: string
}
type setCurrentCurrencyType = {
    type: "SET_CURRENT_CURRENCY"
    currency: string
}
type deleteFromCartType = {
    type: "DELETE_FROM_CART"
    id: string
}
type addItemType = {
    type: "ADD_ITEM"
    id: string
}

type addToCartType = {
    type: "ADD_TO_CART"
    product: any
}
type setSneakersType = {
    type: "SET_SNEAKERS"
    sneakers: any
}
type setTotalCountType = {
    type: "SET_TOTAL_COUNT"
    totalCount: number
}
type setCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type setCurrentTermType = {
    type: "SET_CURRENT_TERM"
    currentTerm: {
        term: string,
        brand: string,
        colorway: string,
        gender: string,
    }

}
type setLoadingType = {
    type: "SET_LOADING"
    boolean: boolean
}

const setSneakers = (sneakers: any) => ({type: "SET_SNEAKERS", sneakers})
const setLoading = (boolean: boolean) => ({type: "SET_LOADING", boolean})
const setCurrencyRates = (rates: any) => ({type: "SET_CURRENCY_RATES", rates})
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setRate = (currency: string) => ({type: "SET_RATE", currency})
export const setCurrentCurrency = (currency: string) => ({type: "SET_CURRENT_CURRENCY", currency})
export const deleteFromCart = (id: string) => ({type: "DELETE_FROM_CART", id})
export const addToCart = (product: any) => ({type: "ADD_TO_CART", product})
export const addItem = (id: string) => ({type: "ADD_ITEM", id})
export const deleteItem = (id: string) => ({type: "DELETE_ITEM", id})
export const setTotalCount = (totalCount: number) => ({type: "SET_TOTAL_COUNT", totalCount})
export const setCurrentTerm = (term: string, brand: string, colorway: string, gender: string) => ({
    type: "SET_CURRENT_TERM",
    currentTerm: {term, brand, colorway, gender}
})

export const getSneakers = (page = initialState.currentPage, title = "", brand = "", gender = "", colorway = "") => async (dispatch: any) => {
    dispatch(setLoading(true))
    let res = await getSneakersAPI(page, title, brand, gender, colorway)
    dispatch(setCurrentPage(page))
    dispatch(setTotalCount(res.data.count))
    dispatch(setSneakers(res.data))
    dispatch(setCurrentTerm(title, brand, colorway, gender))
    dispatch(setLoading(false))
}

export const changeCurrency = () => async (dispatch: any) => {
    let response = await getCurrentCurrencyAPI()
    dispatch(setCurrencyRates(response))
}