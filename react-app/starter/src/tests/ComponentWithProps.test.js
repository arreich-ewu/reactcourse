import React from 'react';
import { create } from 'react-test-renderer';
import ComponentWithProps from '../Components/ComponentWithProps';

test(`it should render the correct heading from props when a header prop is supplied`, () => {
    const testHeader = "test header";
    const testRenderer = create(<ComponentWithProps header={testHeader}/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('h1').children).toContain(testHeader);
});

test(`it should render the correct content from props when a content prop is supplied`, () => {
    const testContent = "test content";
    const testRenderer = create(<ComponentWithProps content={testContent}/>);
    const testInstance = testRenderer.root;
    const renderedParagraphs = testInstance.findAllByType('p')
    expect(renderedParagraphs[0].children).toContain(testContent);

});

test(`it should render the correct number from props when a number prop is supplied`, () => {
    const testNumber = 29;
    const testRenderer = create(<ComponentWithProps number={testNumber}/>);
    const testInstance = testRenderer.root;
    const renderedParagraphs = testInstance.findAllByType('p')
    expect(renderedParagraphs[1].children).toContain(testNumber.toString());
});