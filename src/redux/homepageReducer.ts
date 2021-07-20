import {getCurrentCurrencyAPI, getSneakersAPI} from "../Components/dal/api"
import {setCurrencyRates, setCurrentPage, setCurrentTerm, setLoading, setSneakers, setTotalCount} from "./actions";
import {ActionTypes} from "./store";


export interface IShoe {
    brand: string
    colorway: string
    id: string
    media: {
        imageUrl: string | null
        smallImageUrl: string | null
        thumbUrl: string | null
    }
    name: string
    releaseDate: string
    retailPrice: number
    shoe: string
    styleId: string
    title: string
    year: number
}
export interface ISneakers {
    count: number,
    results: Array<IShoe>
}

export interface ICart{
    [key: number]: IShoe
    count: number
}

let initialState = {
    sneakers: {} as ISneakers,
    isLoading: true,
    currentPage: 1,
    totalCount: 0,
    term: "",
    brand: "",
    colorway: "",
    gender: "",
    cart: [] as Array<ICart>,
    finalPrice: 0,
    currentCurrency: "USD",
    currencyRates: {} as {[keys: string]: number},
    rate: 1,
}

type initialStateType = typeof initialState


export const homepageReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
            return {...state, rate: state.currencyRates[`${action.currency}`]}
        default:
            return state
    }
}


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