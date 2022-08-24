import { ADD_TO_NOTE,DELETE_DATA } from "../Reducer/Constent";


export const addtocardActions = (data )=> {
    return(
        {
            type:ADD_TO_NOTE,
            payload:data
        }
    )
}

export const deletedataActions = (data) => {
        return(
            {
                type:DELETE_DATA,
                payload:data
            }
        )

}