class TaskService {

    constructor() {
        this.tasks = [
            {id: 1, description: 'Aprender ReactJs', whenToDo:'01/08/2023', done:false },
            {id: 2, description: 'Limpar o Quarto', whenToDo:'31/07/2023', done:true },
            {id: 3, description: 'Iniciar o 6º semestre na faculdade', whenToDo:'07/08/2023', done:false },
            {id: 4, description: 'Teste', whenToDo:'07/08/2023', done:false }

        ];
        
    }
    

    list(){
        return this.tasks;
    }

    delete(id){
        this.tasks = this.tasks.filter(taks => taks.id !== id)
    }

    load(id){
       return this.tasks.filter(t => t.id === id)[0]
    }

    save(task){

        if (task.id !== 0) {
            this.tasks = this.tasks.map(t => t.id !== task.id ? t : task)
        } else {
            const taskId = Math.max(...this.tasks.map(t => t.id) + 1);
            task.id = taskId;
            this.tasks.push(task);
        }

        
        
    }
}

const objeto = new TaskService();

export default objeto;