import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    // bind deleteProject on click handler to pass up id
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        console.log(this.props);
        ('');
        return (
            <li className="ProjectItem">
                <strong>{this.props.project.title}</strong>:{' '}
                {this.props.project.category}{' '}
                <a
                    href="#"
                    onClick={this.deleteProject.bind(
                        this,
                        this.props.project.id
                    )}
                >
                    X
                </a>
            </li>
        );
    }
}

// validation checking type of properties
ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
};

export default ProjectItem;
