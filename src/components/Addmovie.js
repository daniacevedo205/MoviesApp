import React from 'react';
import buttonImg from '../images/add.png'
import {Link} from 'react-router-dom'


const AddMovie = (props) => (
    <Link to="/movie/new">
        <img src={buttonImg}/>
    </Link>
)
 
export default AddMovie;