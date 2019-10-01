export const getDoneTasks = state => {

  if(!state.doneTasks.length === undefined || !state.doneTasks.length == 0) {
    return state.doneTasks;
  }else {
    return state.doneTasks.length == 0;
  }
  
 
};
