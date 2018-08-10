import React, { Component } from "react";
import { connect } from "react-redux";

import {
  onAdd,
  onDelete,
  onEdit,
  onSave,
  onToggle
} from "./actions/todoActions";
import {
  showAll,
  showCompleted,
  showUncompleted
} from "./actions/filterActions";

import Todo from "./components/Todo";

import "./App.scss";

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="todo__wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <Todo
                tasks={this.props.todoList}
                onSubmit={this.props.onSubmit}
                onDelete={this.props.onDelete}
                onEdit={this.props.onEdit}
                onSave={this.props.onSave}
                onToggle={this.props.onToggle}
                showAll={this.props.showAll}
                showCompleted={this.props.showCompleted}
                showUncompleted={this.props.showUncompleted}
                filter={this.props.filter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList,
  filter: state.filter
});

const dispatchToProps = dispatch => ({
  onSubmit: (task, length) => dispatch(onAdd(task, length)),
  onDelete: index => dispatch(onDelete(index)),
  onEdit: index => dispatch(onEdit(index)),
  onSave: index => dispatch(onSave(index)),
  onToggle: index => dispatch(onToggle(index)),
  showAll: tasksArray => dispatch(showAll(tasksArray)),
  showCompleted: tasksArray => dispatch(showCompleted(tasksArray)),
  showUncompleted: tasksArray => dispatch(showUncompleted(tasksArray))
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
