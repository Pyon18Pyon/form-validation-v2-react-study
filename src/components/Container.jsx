import React from 'react';
import './Container.css';

function Container({ title, children }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Container;