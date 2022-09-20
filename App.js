import * as React from 'react';
import { useState } from 'react';
import './style.css';

function Child(props) {
  return (
    <div>
      <input id="input" value={props.value} onChange={props.onChangeProps} />
    </div>
  );
}

export default function App({ initial }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div>
      <div id="value">{value}</div>
      <Child value={value} onChangeProps={handleChange} />
    </div>
  );
}
