const questionReducer = (state = {data:null},action) => {
    switch (action.type) {
        case "POST_QUESTION":
            return { ...state}
        case "POST_ANSWER":
            return { ...state}
        case "FETCH_ALL_QUESTION":
            return {...state,data: action.payload}
        default:
            return state
    }
}
export default questionReducer