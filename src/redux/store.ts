import {applyMiddleware, combineReducers, createStore} from "redux";
import {homepageReducer} from "./homepageReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    homepage: homepageReducer
})
type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store