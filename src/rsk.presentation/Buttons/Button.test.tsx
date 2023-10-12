
import Button from "./Button";
import { render } from "@testing-library/react";


test('it renders the Button component', () => {

    render(<Button name={""} onClick={""} onSubmit={""} disabled={false} />);
});


test('should run example code', () => {
    // creates a new mocked function with no formal arguments.
    expect(Button.name).toBe('Button');
    expect(Button).toHaveLength(1);

    

    // // creates a deeply cloned version of the original object.
    // expect(example.object).toEqual({
    //     baz: 'foo',
    //     bar: {
    //         fiz: 1,
    //         buzz: [],
    //     },
    // });

    // // creates a new empty array, ignoring the original array.
    // expect(example.array).toHaveLength(0);

    // // creates a new property with the same primitive value as the original property.
    // expect(example.number).toBe(123);
    // expect(example.string).toBe('baz');
    // expect(example.boolean).toBe(true);
    // expect(example.symbol).toEqual(Symbol.for('a.b.c'));
});