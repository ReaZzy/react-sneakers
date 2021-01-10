import {applyMiddleware, combineReducers, createStore} from "redux";
import {homepageReducer} from "./homepageReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    homepage: homepageReducer
})
type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store