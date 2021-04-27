import React from 'react';
import DateCreated from './utils/DateCreated';

const TodoForm = () => {
    return (
        <form>
            <div className="form-group">
                <label for="todoDescription">Description:&nbsp;</label>
                <input type="text" name="todoDescription" className="form-control" placeholder="Todo Description"></input>
            </div>
            <div className="form-group">
                <label for="todoDateCreated">Created on:&nbsp;</label>
                <DateCreated/>
            </div>
            <div className="form-group">
                <label for="todoCompleted">Completed:&nbsp;</label>
                <input type="checkbox" name="todoCompleted"></input>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </div>
        </form>

    );

};

export default TodoForm;