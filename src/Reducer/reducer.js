import { ADD_TO_NOTE, DELETE_DATA } from "./Constent";

const initialstate = {
    note:[]
}

export const addtonotereducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TO_NOTE: {
            return {
                ...state,
                note:[...state.note,action.payload]
            }
        }

        case DELETE_DATA: {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}

