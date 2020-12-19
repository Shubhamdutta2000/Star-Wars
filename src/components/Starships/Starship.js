import React from "react";

const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Manufacturer - {starship.manufacturer}</p>
      <p>Model - {starship.model}</p>
    </div>
  );
};

export default Starship;
