import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class AddProject extends Component {
    render() {
        let projectItems;
        return (
            <div>
                <h3>Add Project</h3>
                <form>
                    <div>
                        <label>Title</label>
                        <br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Categpry</label>
                        <br />
                        <select ref="category" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;
