import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="containerCenter  d-flex flex-column justify-content-center align-items-center rounded">
        <p>{`ToDoList :)`} </p>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Container;
