import React, { Component } from 'react';
import TaskService from '../api/TaskService'
import {ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Navigate} from 'react-router-dom';

class TaskListTable extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tasks: [],
            editId: 0
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
        this.onEditHandler = this.onEditHandler.bind(this);
    }

    componentDidMount() {
        this.listTasks();
    }

    listTasks() {
        const tasks = TaskService.list();
        this.setState({ tasks: tasks });
    }

    onStatusChangeHandler(task){
        task.done = !task.done;
        TaskService.save(task);
        this.listTasks();
    }

    onEditHandler(id){
        this.setState({editId: id})   
    }

    onDeleteHandler(id) {

        if (window.confirm("Deseja mesmo excluir essa tarefa?")) {
            TaskService.delete(id);
            this.listTasks();
            toast.success('Tarefa excluída com sucesso!', { position: toast.POSITION.BOTTOM_LEFT });
        }


    }

    render() {

        if (this.state.editId > 0) {
            return <Navigate to={`/form/${this.state.editId}`}></Navigate>
        }

        return (
            <>
                <table className='table table-striped'>
                    <TableHeader></TableHeader>
                    {this.state.tasks.length > 0 ?
                      <TableBody
                        tasks={this.state.tasks}
                        onDelete={this.onDeleteHandler}
                        onStatusChangeHandler={this.onStatusChangeHandler}
                        onEdit={this.onEditHandler}
                        >

                       </TableBody>
                       :
                       <EmptyBody></EmptyBody>
                    }
                       
                </table>
                <ToastContainer autoClose={1500}></ToastContainer>
            </>
        );
    }
}

const TableHeader = () => {
    return (
        <thead className="table-dark">
            <tr>
                <th scope='col'>Status</th>
                <th scope='col'>Descrição</th>
                <th scope='col'>Data</th>
                <th scope='col'>Ações</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    return (
        <tbody>
            {props.tasks.map(task =>

                <tr key={task.id}>
                    <td><input type='checkbox' checked={task.done} onChange={() => {props.onStatusChangeHandler(task)}}></input></td>
                    <td>{task.done ? <s>{task.description}</s> : task.description}</td>
                    <td>{task.done ? <s>{task.whenToDo}</s> : task.whenToDo}</td>
                    <td>
                        <input type='button' value='Editar' className='btn btn-primary' onClick={() => props.onEdit(task.id)}></input>
                        &nbsp;<input type='button' value='Excluir' className='btn btn-danger'
                            onClick={() => props.onDelete(task.id)}
                        ></input>
                    </td>
                </tr>

            )}

        </tbody>

    )
}

const EmptyBody = (props) => {

    return (
        <tbody>
            <tr>
                <td colSpan="4" style={{textAlign: 'center'}}>Sem tarefas cadastradas no momento</td>
            </tr>
        </tbody>
    )

}

export default TaskListTable;