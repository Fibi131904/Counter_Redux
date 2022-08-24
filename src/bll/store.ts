import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { counterReduser } from "./counterReduser";



const rootReduser= combineReducers({
    counter: counterReduser
})


export const store= createStore(rootReduser)

export type  AppStateType= ReturnType<typeof rootReduser>