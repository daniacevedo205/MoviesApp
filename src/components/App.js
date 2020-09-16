import React from 'react';
import Movies from '../pages/Movies'
import MoviesNew from '../pages/MoviesNew'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App = () => (
        <BrowserRouter>
            <Switch>            
                <Route exact path="/movie" component={Movies}/>
                <Route exact path="/movie/new" component={MoviesNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>   
)
 
export default App;