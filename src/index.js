import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Main() {

  const hello = "Hello React!"
  return (
    <div className="main">
      <div>
        {hello}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);