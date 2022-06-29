import React,{ useState } from 'react';

function Input() {
  const [value, setValue] = useState();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <h1>here i can only display the value i type not save it and add to my array</h1>
      <input value={value} onChange={onChange} />
      <div>Input value: {value}</div>
    </>
  );
}
export default Input