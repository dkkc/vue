import uuid from "uuid";
import doneTasks  from "../done-tasks/doneTasks";

export const deleteSelectedTodo= (state , id) => {
  const deleted = state.todos.splice(id,1);
  doneTasks.state.doneTasks = [...doneTasks.state.doneTasks, deleted[0]];
  return state.todos
 };

export const addTodoInputChangeHandler= (state,value)=>{
  const id = uuid.v4();
  state.inputValue = value;
  const newTodo = {
    id,
    action: state.inputValue
  };
  state.todos = [...state.todos, newTodo];
  state.inputValue = "";
};
