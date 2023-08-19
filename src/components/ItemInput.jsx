import React from "react";

const ItemInput = ({}) => {
  return (
    <li className="list-group-item d-inline-flex">
      <input className="form-control me-2" placeholder="New task"></input>
      <button className="btn btn-secondary">+</button>
    </li>
  );
};

export default ItemInput;
