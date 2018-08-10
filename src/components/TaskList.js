import React from "react";
import { Button, CardBody, CardTitle } from "reactstrap";

import Task from "./Task";

const TaskList = props => {
  this.deleteTask = index => {
    props.onDelete(index);
  };

  this.editTask = index => {
    props.onEdit(index)
  }

  this.saveTask = index => {
    props.onSave(index)
  }

  this.toggleTask = index => {
    props.onToggle(index)
  }

  this.showAll = () => {
    props.showAll(props.tasks)
  }
  this.showCompleted = () => {
    props.showCompleted(props.tasks)
  }
  this.showUncompleted = () => {
    props.showUncompleted(props.tasks)
  }
  return (
      
    <CardBody className="todo__list">
      <CardTitle>My todo list</CardTitle>
      {props.tasks.map(task => (
        <Task
          onDelete={this.deleteTask}
          key={task.id}
          task={task}
          onEdit={this.editTask}
          onSave={this.saveTask}
          onToggle={this.toggleTask}
        />
      ))}
      <div className="d-flex justify-content-around">
        <Button outline={props.filter !== 'SHOW_ALL' ? true : false} onClick={this.showAll} color="primary">Show all</Button>
        <Button outline={props.filter !== 'SHOW_COMPLETED' ? true : false} onClick={this.showCompleted} color="success">Show completed</Button>
        <Button outline={props.filter !== 'SHOW_UNCOMPLETED' ? true : false} onClick={this.showUncompleted} color="danger">Show uncompleted</Button>
      </div>
    </CardBody>
  );
};

export default TaskList;
