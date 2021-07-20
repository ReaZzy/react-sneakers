import {applyMiddleware, combineReducers, createStore} from "redux";
import {homepageReducer} from "./homepageReducer";
import thunkMiddleware from 'redux-thunk';
import * as ReduxActions from './actions'

const reducers = combineReducers({
    homepage: homepageReducer
})
type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof ReduxActions>>;

export default store