import { ADD_TO_NOTE, CARD_STORE_DATA,DELETE_DATA } from "./Constent";

const initialstate = {
    note:[]
}
export const addtonotereducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TO_NOTE: {
            return {
                ...state,
                note: [...state.note, action.payload]
            }
        }
        case DELETE_DATA: {
            const data = state.note.filter((data) => data?.id !== action.payload)
            return {
                ...state,
                note:data 
            }
        }
        case CARD_STORE_DATA:{
            
            return {
                ...state,
                  
            }
        }
        default: {
            return state
        }
    }
}



