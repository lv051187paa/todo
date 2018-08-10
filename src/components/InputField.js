import React, { Component } from "react";
import { Button, InputGroup, InputGroupAddon, Input } from "reactstrap";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  setValue = e => {
    this.setState({
      ...this.state,
      value: e.target.value
    });
  };

  addTask = (task, length) => {
    if (task !== "") this.props.onSubmit(task);
    this.setState({
      ...this.state,
      value: ""
    });
  };

  render() {
    return (
      <InputGroup>
        <Input
          onChange={e => {
            this.setValue(e);
          }}
          value={this.state.value}
        />
        <InputGroupAddon addonType="append">
          <Button
            onClick={() =>
              this.addTask(this.state.value, this.props.tasksLength)
            }
            color="primary"
          >
            Add Task
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default InputField;
