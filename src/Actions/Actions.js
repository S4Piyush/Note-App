import { ADD_TO_NOTE, DELETE_DATA,CARD_STORE_DATA } from "../Reducer/Constent";


export const addtocardActions = (data) => {
    return (
        {
            type: ADD_TO_NOTE,
            payload: data
        }
    )
}

export const deletedataActions = (data) => {
    return (
        {
            type: DELETE_DATA,
            payload: data
        }
    )

}
export const cardstoredata = (data) => {
    return (
        {
            type: CARD_STORE_DATA,
            payload:data
        }
    )
}

