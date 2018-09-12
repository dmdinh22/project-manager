import React, { Component } from 'react';
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
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    title: 'Mobile App',
                    category: 'Mobile Development'
                },
                {
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        });
    }

    render() {
        // set props in component similar to attributes
        return (
            <div className="App">
                <AddProject />
                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default App;
