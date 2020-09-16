import React from 'react';

const Welcome = ({username}) =>(
        <div className="container">
            <div className ="Movies-User-Info">
                <h1>Hello {username}!</h1>
                <p>Welcome to World Movies</p>
            </div>
        </div>
)

 
export default Welcome;