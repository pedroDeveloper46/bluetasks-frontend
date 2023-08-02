import React, { Component } from 'react';
import TaskService from '../api/TaskService'
import { Navigate, useParams } from 'react-router-dom';





class TaskForm extends Component {

    

    constructor(props) {


        super(props);

        this.state = {
            task: {
                id : 0,
                description: '',
                whenToDo: '' 
            },

            redirect: false
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        
    }

    
    componentDidMount() {

       const editId = this.props.match.params.id;

       
       if (editId) {
           const task = TaskService.load(~~editId)
           this.setState({task: task})
           
       } 
    }
    
    onSubmitHandler(event){
        event.preventDefault();
        TaskService.save(this.state.task)
        this.setState({redirect:true});        
    }

    onInputChangeHandler(event){
        
        const field = event.target.name;
        const value = event.target.value;

        this.setState(prevState => (
            {
                task: { ...prevState.task,
                [field]: value}
            }
        ));

        
    }

    render() {

        if (this.state.redirect) {
            return <Navigate to={'/'}></Navigate>
        }
       
        
        return (

            <div>
                <h1>Cadastro de Tarefa</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor='description'>Descrição</label>
                        <input type='text' className='form-control' name='description' placeholder='Digite a descrição' 
                        onChange={this.onInputChangeHandler}
                        value={this.state.task.description}
                        ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor='whenToDo'>Data</label><br></br>
                        <input type='date' className='form-control' name='whenToDo' placeholder='Informe a data' 
                        onChange={this.onInputChangeHandler}
                        value={this.state.task.whenToDo}
                        ></input>
                    </div>
                    <br></br>
                   
                    <button type='submit' className='btn btn-primary'>Cadastrar</button>
                    &nbsp;&nbsp;
                    <button type='button' className='btn btn-primary'>Cancelar</button>

    
                </form>
            </div>
        );
    }
}

const Params = (props) =>{
    const {id} = useParams();

    return id;

}



export default TaskForm;