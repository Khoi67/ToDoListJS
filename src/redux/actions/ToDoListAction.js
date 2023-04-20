import { add_task, change_theme, del_task, done_task, edit_task, update_task } from "../types/ToDoListType";


export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask
})

export const changeThemeAction = (themeId) => ({
  type: change_theme,
  themeId
})

export const doneTaskAction = (taskId) => ({
  type: done_task,
  taskId
})

export const delTaskAction = (taskId) => ({
  type: del_task,
  taskId
})

export const editTaskAction = (task) => ({
  type: edit_task,
  task
})

export const updateTaskAction = (taskName) => ({
  type: update_task,
  taskName
})
