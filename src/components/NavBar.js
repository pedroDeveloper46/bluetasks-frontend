import React, { Component } from 'react';
import NavBarItem from './NavBarItem';

import APP_NAME from './constants';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                { name: "Listar Tarefas", href: "/", active: true },
                { name: "Nova Tarefa", href: "/form", active: false },
                { name: "Logout", href: "/", active: false }
            ]
        };

        this.onClickHandler = this.onClickHandler.bind(this);

    }

    onClickHandler(itemClicked) {
        
        const items = [...this.state.items];

        items.forEach(item =>{
            if (itemClicked.name === item.name) {
                item.active = true;
            }else{
                item.active = false;
            }
        })

        this.setState({items});


    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft: 20}}>
                    <span className="navbar-brand mb-0 h1">{APP_NAME}</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav mr-auto">
                            {this.state.items.map(i =>
                                <NavBarItem
                                    key={i.name}
                                    item={i}
                                    onClick={this.onClickHandler}>
                                </NavBarItem>)}
                        </div>

                    </div>
                </nav>


            </div>
        );
    }
}

export default NavBar;