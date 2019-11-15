import React from 'react'
import addImg from "../images/add.png"
import './styles/Card.css'
import {Link} from 'react-router-dom'

class AddBottom extends React.Component{
    render(){
        return (
            <Link to="/exercise/new">
                <img src={addImg} className="Fitness-Add"/>
            </Link>
        )
    }
}

export default AddBottom;