import React from 'react';
import Card from './Card'

const MovieList = ({movies}) => (
        <div>
            {movies.map((movie) => {
                        return(
                            <Card
                                key={movie.id}
                                title={movie.title}
                                description={movie.description}
                                fecha={movie.fecha}
                                calificacion={movie.calificacion}
                                img={movie.img}
                            /> 
                        )    
                    })}
        </div>
)

 
export default MovieList;