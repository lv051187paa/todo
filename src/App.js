import React, { Component } from "react";
import { connect } from "react-redux";

import { onAdd, onDelete, onEdit } from "./actions/actions";

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
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state
});

const dispatchToProps = dispatch => ({
  onSubmit: (task, length) => dispatch(onAdd(task, length)),
  onDelete: index => dispatch(onDelete(index)),
  onEdit: index => dispatch(onEdit(index))
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
