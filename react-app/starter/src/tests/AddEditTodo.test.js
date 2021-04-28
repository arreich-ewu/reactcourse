import React from 'react';
import { create } from 'react-test-renderer';
import AddEditTodo from '../Components/AddEditTodo';

jest.mock("../Components/TodoForm", () => {
    return function MockForm() {
        return (<form>Placeholder form</form>);
    };
    
});

test('it has correct div class names', () => {
    const testRenderer = create(<AddEditTodo />);
    const testInstance = testRenderer.root;
    const testdiv = testInstance.findByType('div');
    expect(testdiv.props.className).toContain("AddEditTodo");
    expect(testdiv.props.className).toContain("row");

});

test('it renders a form', () => {
    const testRenderer = create(<AddEditTodo />);
    const testInstance = testRenderer.root;
    const testForm = testInstance.findByType('form');
    expect(testForm).toBeTruthy();
    expect(testForm.children).toContain("Placeholder form");
})