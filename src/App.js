import { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskListTable from './components/TaskListTable';
import TaskForm from './components/TaskForm';

class App extends Component {
  //constructor(props){
  //super(props)
  //}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          
          <div className='container' style={{marginTop: 20}}>
            
              <Routes>
                <Route path='/' Component={TaskListTable}></Route>
                <Route exact path='/form' Component={TaskForm}></Route>
                <Route exact path='/form/:id' Component={TaskForm}></Route>
              </Routes>
              
            
            
          </div>
          
        </div>
      </BrowserRouter>
    );

  }
}




export default App;
