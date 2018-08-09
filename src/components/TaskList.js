import React from "react";
import { Button, CardBody, CardTitle } from "reactstrap";

import Task from "./Task";

const TaskList = props => {
  this.deleteTask = index => {
    props.onDelete(index);
  };

  this.editTask = index => {
      console.log(index)
    props.onEdit(index)
  }
  console.log(props);
  return (
      
    <CardBody>
      <CardTitle>My todo list</CardTitle>
      {props.tasks.map(task => (
        <Task
          onDelete={this.deleteTask}
          id={task.id}
          key={task.id}
          taskName={task.title}
          editable={task.editable}
          onEdit={this.editTask}
        />
      ))}
      <Button>Button</Button>
    </CardBody>
  );
};

export default TaskList;
