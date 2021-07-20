import {AppStateType} from "./store";

export const getIsLoading = (state: AppStateType) => {
    return state.homepage.isLoading
}

export const getSneakersSelector = (state: AppStateType) => {
    return state.homepage.sneakers
}
export const getCurrentTerm = (state: AppStateType) => {
    return state.homepage.term
}
export const getCurrentBrand = (state: AppStateType) => {
    return state.homepage.brand
}
export const getCurrentGender = (state: AppStateType) => {
    return state.homepage.gender
}
export const getCurrentColorway = (state: AppStateType) => {
    return state.homepage.colorway
}
export const getTotalCount = (state: AppStateType) => {
    return state.homepage.totalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.homepage.currentPage
}

export const getCart = (state: AppStateType) => {
    return state.homepage.cart
}

export const getRate = (state: AppStateType) => {
    return state.homepage.rate
}
export const getCurrentCurrency = (state: AppStateType) => {
    return state.homepage.currentCurrency
}