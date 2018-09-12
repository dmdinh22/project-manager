import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
    // store data that we submit from form into componentstate
    constructor() {
        super();
        this.state = {
            newProject: {}
        };
    }

    // setting this.props with these values
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    };

    handleSubmit(e) {
        e.preventDefault();

        if (this.refs.title.value === '') {
            alert('Title is required');
        }

        this.setState(
            {
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            },
            //callback function
            function() {
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            }
        );
    }

    render() {
        // pulled from props above render()
        let categoryOptions = this.props.categories.map(category => {
            return (
                <option key={category} value={category}>
                    {category}
                </option>
            );
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Categpry</label>
                        <br />
                        <select ref="category">{categoryOptions}</select>
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// validation checking type of properties
AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
};

export default AddProject;
