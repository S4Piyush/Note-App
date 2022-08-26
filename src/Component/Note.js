import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Addtonote from './Addtonote';
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtonotereducer } from "../Reducer/reducer";
import { useState } from 'react';
import { TitleupdatedActions, discriptionupdatedActions,deletedataActions} from "../Actions/Actions"





function Note() {

    const dispatch = useDispatch();

    const getdata = useSelector((state) => state.addtonotereducer.note);

    const [search, setsearch] = useState()

    const searchdata = () => {

        let data = getdata || [];

        if (search) {

            data = data.filter((element) => element.Title.includes(search) || element.discription.includes(search))
            return data
        }
        else {
            return data
        }

    }

    // carddelete//
    const btndelete = (e, id) => {
        e.preventDefault()
        dispatch(deletedataActions(id))
    }

    const handelchangetitle = (e, index) => {
  
        let clone = [...getdata,];
        let obj = { ...clone[index] };
        clone[index] = { ...obj, [e.target.name]: e.target.value }
        dispatch(TitleupdatedActions(clone))
    }

    const handeldiscription = (e, index) => {

        let clone = [...getdata,];
        let obj = { ...clone[index] };
        clone[index] = { ...obj, [e.target.name]: e.target.value }
        dispatch(discriptionupdatedActions(clone))
    }

    const clearscren = (e) => {
        e.preventDefault()
        setsearch('')  

    }
    return (
        <div className="container">
            <div className="row">
                <h2>Notes</h2>
                <div className="col-12 mt-3">
                    <Form className="d-flex " >
                        <Form.Control 
                            type="search"
                            placeholder="Search"
                            className="me-2 w-100"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                        />
                        <button variant="outline-success" className='button-s ms-auto' onClick={clearscren}>Clear</button>
                    </Form>

                </div>
            </div>

            <div className='card-note'>
                <div className='row'>
                    {
                        searchdata().map((data,i) =>
                            <div className="col-lg-4 mt-5" key={data.id}>
                                <div className='card-border' style={{ backgroundColor: data.color }}>
                                    <form>
                                        <div>
                                            <input type="text"
                                                placeholder='Title'
                                                className='input input-text'
                                                name='Title'
                                                value={data.Title}
                                                onChange={(e) => handelchangetitle(e, i,)}
                                                
                                            />
                                        </div>
                                        <div>
                                            <textarea type="text"
                                                placeholder='Tack a note...'    
                                                className='mt-3 input'
                                                name='discription'
                                                rows="3"
                                                value={data.discription}
                                                onChange={(e) => handeldiscription(e, i,)}
                                            />
                                        </div>
                                        <div className='btndelete'>
                                            <button onClick={(e) => btndelete(e, data.id)}><MdOutlineDelete /></button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-cen ">
                    <div className='btnpos'>
                        <Addtonote/>
                    </div>
                </div>
            </div>


        </div>



    )
}
export default Note;
