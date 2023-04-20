import { ToDoListDefaultTheme } from "../../JSS_StyledComponent/Themes/ToDoListDefaultTheme";
import {
  add_task,
  change_theme,
  del_task,
  done_task,
  edit_task,
  update_task,
} from "../types/ToDoListType";
import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../JSS_StyledComponent/Themes/ToDoListLightTheme";
import { arrTheme } from "../../JSS_StyledComponent/Themes";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: 1, taskName: "Task 1", done: true },
    { id: 2, taskName: "Task 2", done: false },
    { id: 3, taskName: "Task 3", done: true },
    { id: 4, taskName: "Task 4", done: false },
  ],
  taskEdit: { id: '-1 ', taskName: "Task 3", done: true },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      //Ktra rỗng
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      //Ktra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );

      if (index !== -1) {
        alert("Task name already existed!");
        return { ...state };
      }
      taskListUpdate.push(action.newTask);

      state.taskList = taskListUpdate;
      return { ...state };
    }
    case change_theme: {
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        state.themeToDoList = { ...theme.theme };
      }
      return { ...state };
    }
    case done_task: {
      // console.log(action.taskId);
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }
      // state.taskList = taskListUpdate
      return { ...state, taskList: taskListUpdate };
    }
    case del_task: {
      // // console.log(action.taskId);
      // let taskListUpdate = [...state.taskList];
      
      // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId)

      // return {
      //   ...state, taskList: taskListUpdate  
      // };
      return {...state, taskList:state.taskList.filter(task=>task.id !== action.taskId)}
    }
    case edit_task:{
      return{...state, taskEdit: action.task}
    }

    case update_task:{
      console.log(action.taskName);

      state.taskEdit = {...state.taskEdit, taskName: action.taskName}
      let taskListUpdate = [...state.taskList]
      let index = taskListUpdate.findIndex(task=> task.id === state.taskEdit.id)
      
      if(index !== -1){
        taskListUpdate[index] = state.taskEdit
      }
      state.taskList = taskListUpdate
      state.taskEdit = {id: '-1', taskName: '', done: false}

      return {...state}
    }

    default:
      return { ...state };
  }
};
