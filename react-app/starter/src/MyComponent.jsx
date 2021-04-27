import React from 'react';
import ComponentWithProps from './Components/ComponentWithProps';

const MyComponent = () => {
    return (
        <>
            <ComponentWithProps/>
            <ComponentWithProps content="Content passed from Props" number="10"/>
        </>
    );
};

export default MyComponent;