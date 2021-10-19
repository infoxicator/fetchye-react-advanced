import React from 'react';

const Outline = ({ name, children, color = 'primary' }) => (
  <div className={`position-relative p-5 border border-3 rounded border-${color}`}>
    <div className="position-absolute top-0 end-0">
      <span className={`badge bg-${color} me-2`}>{name}</span>
    </div>
    {children}
  </div>
);

export default Outline;
