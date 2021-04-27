import React from 'react';
import PropTypes from 'prop-types';

const ComponentWithProps = props => {
    return (
        <>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <p>{props.number} is the number from the props</p>
            <p>{props.nonexistent} is a nonexistent prop</p>

        </>
    );
};

ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired, 
    number: PropTypes.number.isRequired
}

ComponentWithProps.defaultProps = {
    header: 'Header from defaults', 
    content: 'Content from defaults', 
    number: 100
}

export default ComponentWithProps;
