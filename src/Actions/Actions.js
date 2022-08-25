import { ADD_TO_NOTE, DELETE_DATA, UPDATED_DESCRIPTION, UPDATED_TITLE } from "../Reducer/Constent";

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
export const TitleupdatedActions = (data) => {
    console.log(data)
    return (
        {
            type: UPDATED_TITLE,
            payload: data
        }
     )
}
export const discriptionupdatedActions = (data) => {
    return (
        {
            type: UPDATED_DESCRIPTION,
            payload: data
        }
    )
}

