import uuid from "uuid";
import doneTasks  from "../doneTasks/doneTasks";


export const deleteTodo = (state , id) => {
  const selectedItem = state.todos.filter(todo => {
    if(todo.active) {
      state.todos.splice(id,1);
      doneTasks.state.doneTasks = [...doneTasks.state.doneTasks, todo];
    }else {

    }
  });

  return state.todos
};

export const changeTodoHandler= (state , item) => {

  const selected = state.todos.filter(todo => {
    if(item.id === todo.id) {
      todo.active = !todo.active;

    }else {
      todo.active = false;
    }
    return todo.action;
  });

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
