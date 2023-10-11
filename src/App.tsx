import React, { useState } from 'react';
import Input from './rsk.presentation/Inputs/Input';
import Dropdown from './rsk.presentation/Dropdown/Dropdown';
import Button from './rsk.presentation/Buttons/Button';

function App() {
  const options = [1,2,3,4];
  return (
    <div className="App">
      <Input type="Email" placeholder='Enter The Email' />
      <Input type="number" placeholder='Enter The ph' />
      <Input type="address" placeholder='Enter The address' />
      <Dropdown options={options}  />
      <Button
        name="login"
        disabled={false}
        onClick="clicked on login button"
        onSubmit="submit success on login"
      />
    </div>
  );
}

export default App;
