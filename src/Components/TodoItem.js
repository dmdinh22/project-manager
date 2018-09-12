import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>:
            </li>
        );
    }
}

// validation checking type of properties
TodoItem.propTypes = {
    todo: PropTypes.object
};

export default TodoItem;
