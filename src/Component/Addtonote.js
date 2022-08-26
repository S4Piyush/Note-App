import { useDispatch } from "react-redux";
import { useState } from "react"
import { addtocardActions } from "../Actions/Actions"
import { v4 as uuidv4 } from 'uuid';
import { IoAdd } from "react-icons/io5";


function Addtonote() {

  const dispatch = useDispatch()

  const randem = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const inista = {
    id:"",
    Title:"",
    discription:"",
    color: randem,
  }
  const [All, setAll] = useState(inista)

  const handelsubmit = (e) => {
    e.preventDefault()
    dispatch(addtocardActions({ ...All,id:uuidv4(),color:randem }))
    
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button className='button' onClick={(e) => handelsubmit(e)}><IoAdd/></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Addtonote;
