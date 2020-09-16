import React from 'react';
import MovieList from '../components/MovieList'
import Welcome from '../components/Welcome'
import Addmovie from '../components/Addmovie'
import Loading from '../components/Loading'

class Movies extends React.Component{
    state={
            data: [ ],
            loading:true,
            error:null
            }

    async componentDidMount(){
        await this.fetchMovies()  
    } 
    fetchMovies = async() => {
        try {
            let res = await fetch('http://localhost:8000/movies')
            let data = await res.json()
            this.setState({
              data,
              loading:false
            })
        } catch (error) {
            this.setState({
                loading:false,
                error
              })
        }
     
      // console.log(data) 
    }
    
    render(){
        if(this.state.loading)
           return <Loading/>
        return(
            <div>
                <Welcome
                    username="Daniel"
                />
                <Addmovie/>
                <MovieList
                    movies={this.state.data}
                />
            </div>
        )
    }
}

export default Movies