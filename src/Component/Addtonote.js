import { useDispatch } from "react-redux";
import { useState } from "react"
import { addtocardActions } from "../Actions/Actions"


function Addtonote() {

  const dispatch = useDispatch()


  const randem = '#' + Math.floor(Math.random() * 16777215).toString(16);

  const inista = {
    Title: "",
    discription: "",
    color: randem,

  }

  const [All, setAll] = useState(inista)

  const handelsubmit = () => {
    // console.log("data")
    dispatch(addtocardActions({ ...All,}))
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button className='button' onClick={handelsubmit}>Add New Note</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Addtonote;
