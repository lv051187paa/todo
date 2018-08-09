import React from "react";
import { Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./Task.scss";

const Task = props => (
  <div>
    <Alert
      contentEditable={props.editable}
      color="dark"
      className="d-flex justify-content-between"
    >
      {props.taskName}
      <div className="todo__controls">
        <FontAwesomeIcon
          onClick={() => {
            props.onEdit(props.id);
          }}
          icon={faEdit}
        />
        <FontAwesomeIcon
          onClick={() => {
            props.onDelete(props.id);
          }}
          icon={faTrashAlt}
        />
      </div>
    </Alert>
  </div>
);

export default Task;
