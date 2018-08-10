import React from "react";
import { Card } from "reactstrap";

import InputField from "./InputField";
import TaskList from "./TaskList";

const Todo = props => {
  // console.log(props, 55555555);
  return (
    <Card className="todo__body">
      <InputField onSubmit={props.onSubmit} />
      <TaskList
        onSave={props.onSave}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        onToggle={props.onToggle}
        tasks={props.tasks}
        showAll={props.showAll}
        showCompleted={props.showCompleted}
        showUncompleted={props.showUncompleted}
        filter={props.filter}
      />
    </Card>
  );
};

export default Todo;
