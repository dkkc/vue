export const deleteTodo = ({commit},id) => {
  commit('deleteTodo' ,id)
};

export const changeTodoHandler =({commit} , todo) => {
  commit('changeTodoHandler' , todo);
};

export const addTodoInputChangeHandler = ({commit} , value) => {
  commit('addTodoInputChangeHandler' , value)
};
