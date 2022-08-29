import { combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux'
import { counterReduser } from "./counterReduser";
import { loadState, saveState } from "../utils/localStorage-utils";


const rootReduser = combineReducers({
    counter: counterReduser
})


export const store = createStore(rootReduser, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })

})

export type AppStateType = ReturnType<typeof rootReduser>