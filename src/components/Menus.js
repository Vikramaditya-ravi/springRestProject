import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menus() {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/">
          Home
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
        >
          View Courses
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag
          to="/add-courses"
        >
          Add Courses
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
