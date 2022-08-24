import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Addtonote from './Addtonote';
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtonotereducer } from "../Reducer/reducer";
import { useState } from 'react';


function Note() {

    const getdata = useSelector((state) => state.addtonotereducer.note);
    

    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <h2>Notes</h2>
                <div className="col-12 mt-3">
                    <Form className="d-flex ">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 w-100"
                            aria-label="Search"
                        />
                        <button type='submit' variant="outline-success" className='button-s ms-auto'>Clear</button>
                    </Form>
                </div>
            </div>

            <div className='card-note'>
                <div className='row'>
                    {
                        getdata.map((data) =>
                            <div className="col-lg-4 mt-5" >
                                <div className='card-border'>
                                    <form>
                                        <div>
                                            <input type="text"
                                                placeholder='Title'
                                                className='input input-text'
                                                name='Title'
                                            />
                                        </div>
                                        <div>
                                            <textarea type="text"
                                                placeholder='Tack a note...'
                                                className='mt-3 input'
                                                name='discription'
                                                rows="3"
                                            />
                                        </div>
                                        <div className='btndelete'>
                                            <button><MdOutlineDelete /></button>
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
                        <Addtonote />
                    </div>
                </div>
            </div>


        </div>



    )
}
export default Note;
