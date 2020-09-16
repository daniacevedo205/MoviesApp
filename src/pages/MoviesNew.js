import React from 'react';
import MoviesForm from '../components/MoviesForm'
import Card from '../components/Card'

class MoviesNew extends React.Component{
    state={
        form:{
            title:'',
            description:'',
            fecha:'' ,
            calificacion:'',
            img:''
        }
    }
    handleChange = e =>{  
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }           
        })
    }
    handleSubmit = async e =>{
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/movie',config)
            let json = await res.json()
          
        } catch (error) {
            
        }
    }

    render(){
        return (
            <div className="MovieNew_Lateral_Spaces row">
                <div className="col-sm Movie New_Card_Space">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                <MoviesForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                </div>
            </div>
            
        )
    }
}

export default MoviesNew