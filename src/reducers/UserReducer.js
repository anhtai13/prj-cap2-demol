const initialState = {
    listUsers: [],
    listServicesFromAPI: [],
}

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIST_USER":
            return {
                ...state,
                listUsers: action.payload
            }

        case "UPDATE_STATUS_USER":
            const newListUsers = state.listUsers.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        userName: action.payload.userName,
                        isEdit: action.payload.isEdit
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                listUsers: newListUsers,
            }

        case "DELETE_USER":
            const deleteService = state.listUsers.filter(item => item.id !== action.payload)
            return {
                ...state,
                listUsers: deleteService
            }

        case "GET_USER_LOGIN_INFO":
            state.listUsers = action.payload
            return {
                ...state,
                listUsers: state.listUsers
            }

        case "LOGOUT_USER":
            state.listUsers = null
            return {
                ...state,
                listUsers: state.listUsers
            }

        case "GET_CATEGORY_SERVICE":
            return {
                ...state,
                listUsers: action.payload
            }

        case "RESET_SERVICE":
            return {
                ...state,
                listUsers: []
            }
        case "GET_LIST_SERVICE":
            return {
                ...state,
                listServicesFromAPI: action.payload
            }

        default:
            return state
    }
}