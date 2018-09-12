import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // you want data coming into component set to state
        // everything at top of app is in state, passed down as props
        this.state = {
            projects: []
        };
    }

    // lifecycle method on initilialization of component
    componentWillMount() {
        // set data from API here
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

    // handle data passed up from child
    handleAddProject(project) {
        console.log(project);
        let updatedProjects = this.state.projects;
        updatedProjects.push(project);
        this.setState({ projects: updatedProjects });
    }

    render() {
        // set props in component similar to attributes
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default App;
