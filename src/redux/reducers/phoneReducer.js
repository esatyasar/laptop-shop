import {SELL_PHONE} from "../types/types"

const initialState ={
    numberOfPhone :300
}

const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELL_PHONE:
            return {
                ...state,
                numberOfPhone: state.numberOfPhone - action.payload,

            }
      
        default:
            return state;
    }
}
export default phoneReducer;