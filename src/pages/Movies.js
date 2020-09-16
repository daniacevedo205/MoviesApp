import React from 'react';
import MovieList from '../components/MovieList'
import Welcome from '../components/Welcome'
import Addmovie from '../components/Addmovie'

class Movies extends React.Component{
    state={
            data: [ ]
            }

    async componentDidMount(){
        await this.fetchMovies()  
    } 
    fetchMovies = async() => {
      let res = await fetch('http://localhost:8000/movies')
      let data = await res.json()
      this.setState({
        data
      })
      // console.log(data) 
    }
    
    render(){
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