import { render } from "@testing-library/react";
import DropDown from "./Dropdown";


test('it renders the MyDropdown component', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOption = 'Option 2';
    render(<DropDown options={options} />);
});