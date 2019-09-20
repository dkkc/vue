export const deleteDoneTask = (state , id)=> {
  state.doneTasks.splice(id,1);
  return state.doneTasks;
};
