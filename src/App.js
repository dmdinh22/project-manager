import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // you want data coming into component set to state
        // everything at top of app is in state, passed down as props
        this.state = {
            projects: [],
            todos: []
        };
    }

    getTodos() {
        // get data from API endpoint here
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ todos: data }, function() {
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    id: uuid.v4(),
                    title: 'Mobile App',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        });
    }

    // lifecycle method on initilialization of component
    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    // runs after component is loaded
    componentDidMount() {
        this.getTodos();
    }

    // handle data passed up from child
    handleAddProject(project) {
        console.log(project);
        let updatedProjects = this.state.projects;
        updatedProjects.push(project);

        //reset the state
        this.setState({ projects: updatedProjects });
    }

    handleDeleteProject(id) {
        let updateProjects = this.state.projects;
        let index = updateProjects.findIndex(x => x.id === id);
        updateProjects.splice(index, 1);

        //reset the state
        this.setState({ projects: updateProjects });
    }

    render() {
        // set props in component similar to attributes
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects
                    projects={this.state.projects}
                    onDelete={this.handleDeleteProject.bind(this)}
                />
                <hr />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
