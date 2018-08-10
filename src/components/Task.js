import React from "react";
import { Alert, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faSave } from "@fortawesome/free-solid-svg-icons";

import "./Task.scss";

const Task = props => {
  // console.log(props.task)
  return (
    <div>
      <Alert
        contentEditable={props.task.editable}
        color={props.task.complited ? "success" : "danger"}
        className={
          props.task.visible ? " d-flex justify-content-between " : "d-none"
        }
      >
        {props.task.title}
        <div className="todo__controls">
          <Label check>
            <Input
              type="checkbox"
              onChange={() => props.onToggle(props.task.id)}
              checked={props.task.complited}
            />{" "}
            {props.task.complited ? "Complete" : "Uncomplete"}
          </Label>
          <FontAwesomeIcon
            onClick={() => {
              props.task.editable
                ? props.onSave(props.task.id)
                : props.onEdit(props.task.id);
            }}
            icon={props.task.editable ? faSave : faEdit}
          />
          <FontAwesomeIcon
            onClick={() => {
              props.onDelete(props.task.id);
            }}
            icon={faTrashAlt}
          />
        </div>
      </Alert>
    </div>
  );
};

export default Task;
