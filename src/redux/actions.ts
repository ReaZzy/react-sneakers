export const setSneakers = (sneakers: any) => ({type: "SET_SNEAKERS", sneakers} as const)
export const setLoading = (boolean: boolean) => ({type: "SET_LOADING", boolean} as const)
export const setCurrencyRates = (rates: any) => ({type: "SET_CURRENCY_RATES", rates} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setRate = (currency: string) => ({type: "SET_RATE", currency} as const)
export const setCurrentCurrency = (currency: string) => ({type: "SET_CURRENT_CURRENCY", currency} as const)
export const deleteFromCart = (id: string) => ({type: "DELETE_FROM_CART", id} as const)
export const addToCart = (product: any) => ({type: "ADD_TO_CART", product} as const)
export const addItem = (id: string) => ({type: "ADD_ITEM", id} as const)
export const deleteItem = (id: string) => ({type: "DELETE_ITEM", id} as const)
export const setTotalCount = (totalCount: number) => ({type: "SET_TOTAL_COUNT", totalCount} as const)
export const setCurrentTerm = (term: string, brand: string, colorway: string, gender: string) => ({
    type: "SET_CURRENT_TERM",
    currentTerm: {term, brand, colorway, gender}
} as const)