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
        },
        loading:false,
        error: null, 
        history:''
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
        this.setState({
            loading:true
        })
        e.preventDefault()
        const searchParams = Object.keys(this.state.form).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(this.state.form[key]);
          }).join('&');
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                  },
                  body: searchParams
            }
            let res = await fetch('http://localhost:8000/movie',config)
            let json = await res.json()
          
            this.setState({
                loading:false
            })
            
            this.props.history.push('/movie')
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
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