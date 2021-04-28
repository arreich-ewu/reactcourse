import React, { useState } from 'react';
import DateCreated from './utils/DateCreated';
import PropTypes from 'prop-types';


const TodoForm = props => {
    const [todoDescription, setTodoDescription] = useState(``);
    const [todoDateCreated, setTodoDateCreated] = useState(null);
    const [todoCompleted, setTodoCompleted] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        props.submitTodo(todoDescription, todoDateCreated, todoCompleted);
        setTodoDescription(``);
        setTodoDateCreated(null);
        setTodoCompleted(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="todoDescription">Description:&nbsp;</label>
                <input 
                type="text" 
                name="todoDescription" 
                className="form-control" 
                placeholder="Todo Description" 
                value={todoDescription}
                onChange={event => 
                    setTodoDescription(event.target.value)
                }
                />
            </div>
            <div className="form-group">
                <label for="todoDateCreated">Created on:&nbsp;</label>
                <DateCreated
                updateDateCreated={dateCreated=>
                    setTodoDateCreated(dateCreated)
                }
                />
            </div>
            <div className="form-group">
                <label for="todoCompleted">Completed:&nbsp;</label>
                <input 
                type="checkbox" 
                name="todoCompleted"
                checked={todoCompleted}
                onChange= {event => 
                    setTodoCompleted(event.target.checked)
                }
                />
            </div>
            <div className="form-group">
                <input 
                    type="submit" 
                    className={`btn ${!todoDescription ? `btn-danger` : `btn-primary`}`}
                    value="Submit"
                    disabled={!todoDescription}

                />
            </div>
        </form>

    );

};

TodoForm.propTypes = {
    submitTodo: PropTypes.func.isRequired

}

export default TodoForm;