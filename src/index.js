import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Main() {

  return (
    <div className="main">
      <h1>Cafe</h1>
      <div className="menu">
        <p>Concept</p>
        <p>Menu</p>
        <p>Access</p>
        <p>Recruit</p>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);