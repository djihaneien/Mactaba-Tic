import React from 'react';
import './Form.css';

class Form extends React.Component{
    state={
        name:''
    }
    handleChange=(e)=>{
       this.setState({
           name:e.target.value
       })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='Form'>
               
                <form onSubmit={this.handleSubmit}>
                    <div className='container'>
                        <div className='row'>
                <label >Nom</label>
                    <input className='h col-lg-4' type="texte" onChange={this.handleChange}/>
                <label >Prenom</label>
                    <input className='h col-lg-4' type="text" onChange={this.handleChange}/>
                <label >Date de Naissance</label>
                    <input className='h col-lg-11' type="Date" onChange={this.handleChange}/>
                    </div>
                    </div>
                <label htmlFor="email">Email</label>
                    <input type="text" onChange={this.handleChange}/>
                <label>RFID</label>
                    <input type="number" onChange={this.handleChange}/>
                <label>Niveau</label>
                    <select onChange={this.handleChange}>
                        <option value="Master">Master</option>
                        <option value="Licence">Licence</option>
                        <option selected value="Doctorat">Doctorat</option>
                        
                    </select>
                   
                <button  id="sub_butt">Ajouter</button>
                </form>
                {this.state.name}
                </div>
            
        )
    }
}
export default Form;