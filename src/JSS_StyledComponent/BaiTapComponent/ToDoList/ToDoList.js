import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { ToDoListDefaultTheme } from "../../Themes/ToDoListDefaultTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { Container } from "../../Components/Container";
import { Dropdown } from "../../Components/Dropdown";
import {
  Heading,
  Heading1,
  Heading2,
  Heading3,
} from "../../Components/Heading";
import { Input, Label, TextField } from "../../Components/TextField";
import { Button } from "../../Components/Button";
import { Table, Tr, Th, Thead, Tbody, Td } from "../../Components/Table";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { connect } from "react-redux";
import { add_task } from "../../../redux/types/ToDoListType";
import {
  addTaskAction,
  changeThemeAction,
  delTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTaskAction,
} from "../../../redux/actions/ToDoListAction";
import { arrTheme } from "../../Themes";

class ToDoList extends Component {
  state = {
    taskName: "",
    disable: true,
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                className="ml-1"
                onClick={() => {
                  this.setState({
                    disable: false,
                  })
                  this.props.dispatch(editTaskAction(task));
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>

              <Button
                className="ml-1"
                onClick={() => {
                  // console.log(task.done);
                  this.props.dispatch(doneTaskAction(task.id));
                }}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.dispatch(delTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button className="ml-1">
                <i
                  className="fa fa-trash"
                  onClick={() => {
                    this.props.dispatch(delTaskAction(task.id));
                  }}
                ></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option value={theme.id} key={index}>
          {theme.name}
        </option>
      );
    });
  };

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,

  //   });
  // }

  // static getDerivedStateFromProps(newProps, currentState){

  //   let newState = {...currentState, taskName: newProps.taskEdit.taskName}
  //   return newState
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              console.log(value);
              //Dispatch value lên reducer
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3 className="mt-2">To-Do List</Heading3>
          <TextField
            value={this.state.taskName}
            onChange={(e) => {
              this.setState({
                taskName: e.target.value,
              });
            }}
            name="taskName"
            label="Task name"
            className="w-50"
          />

          {this.state.disable ? (
            <Button
              onClick={() => {
                let { taskName } = this.state;
                let newTask = {
                  id: Date.now(),
                  taskName: taskName,
                  done: false,
                };
                this.setState({
                  taskName: ''
                }, ()=>{
                  this.props.dispatch(addTaskAction(newTask));
                })
              }}
              className="ml-2"
            >
              <i className="fa fa-plus"></i>
              Add
            </Button>
          ) : (
            <Button
              className="ml-2"
              onClick={() => {
                let {taskName} = this.state;

                this.setState({
                  disable: true,
                  taskName: ''
                }, ()=>{
                  this.props.dispatch(updateTaskAction(taskName));
                })
                
              }}
            >
              <i class="fa fa-upload"></i>
              Update
            </Button>
          )}

          <hr />

          <Heading3>To-Do Task </Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>

          <hr />

          <Heading3>To-Do Task Completed </Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps)(ToDoList);
