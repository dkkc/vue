export const deleteSelectedTodo = ({commit},id) => {
  commit('deleteSelectedTodo' ,id)
};

export const addTodoInputChangeHandler = ({commit} , value) => {
  commit('addTodoInputChangeHandler' , value)
};