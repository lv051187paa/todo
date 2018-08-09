import React from "react";
import { Card } from "reactstrap";

import InputField from "./InputField";
import TaskList from "./TaskList";

const Todo = props => {
  console.log(props, 55555555)
  return(
  <Card className="todo__body">
    <InputField onSubmit={props.onSubmit}/>
    <TaskList onEdit={props.onEdit} onDelete={props.onDelete} tasks={props.tasks}/>
  </Card>
)};

export default Todo;
