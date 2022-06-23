import choseReducer from "./counter"
import {combineReducers} from "redux"
import selectReducer from "./select"

const rootReducer=combineReducers({
    counter:choseReducer,
    select:selectReducer
})
export default rootReducer