import React from 'react';

class MoviesForm extends React.Component{
    

    render(){
        const {onChange,onSubmit ,form}=this.props
        return (
            <div className="container">
            <form 
                onSubmit={onSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={onChange}
                        value={form.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={onChange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="fecha" 
                            name="fecha"
                            onChange={onChange}
                            value={form.fecha}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="calificacion" 
                            name="calificacion"
                            onChange={onChange}
                            value={form.calificacion}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary float-right"
                >
                    Guardar
                </button>
            </form>
        </div> 
        )
    }
}

export default MoviesForm