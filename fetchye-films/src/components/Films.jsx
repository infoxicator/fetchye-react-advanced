import React from 'react';

const Films = ({ data }) => (
  <div className="container">
    <ul className="list-group">
      { data.map((film) => (
        <li key={film.episode_id} className="list-group-item">
          <h5 className="card-title">{film.title}</h5>
        </li>
      ))}
    </ul>
  </div>
);

export default Films;
