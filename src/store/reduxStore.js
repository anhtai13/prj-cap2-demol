import { userReducers } from "../reducers/UserReducer"

export const fullStore = ({
    user: userReducers
})

const reduxStore = createStore(fullStore)

export default reduxStore
