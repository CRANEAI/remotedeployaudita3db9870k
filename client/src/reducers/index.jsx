import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import create_account from "./reducer_create_account"

const rootReducer = combineReducers({
  create_account: create_account
})

export default rootReducer
