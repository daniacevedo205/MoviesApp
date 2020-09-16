import React from 'react';
import fondoImg from '../images/fondo.jpg'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

class Card extends React.Component{
    
    
    render(){
        const { title,description,fecha,calificacion,img} = this.props
        return(
            <div className="card mx-auto Movies-Card"
            style={{
                backgroundImage:`url(${fondoImg}), linear-gradient(to right, linear-gradient(to right, #A74CF2, #617BFB))`
            }}
            >
                <div className="card-body">
                    <div className="row-center">
                        <div className="col-6">
                            {/* <img className="float-right"/> */}
                        </div>
                        <div className="col-6 Movies-Card-Info">
                            <h1>
                                {title}
                            </h1>
                            <p>
                                {description}
                            </p>
                            <p>
                                {fecha}
                            </p>
                            <p>
                                {calificacion}
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
            
        )
    }

}


export default Card