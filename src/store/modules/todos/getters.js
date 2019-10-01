	export const getTodoList = state => {
		if(!state.todos.length === undefined || !state.todos.length == 0) {
			return state.todos
		}else {
			return state.todos.length == 0;
		}	
	};

	export const doneTasks= state => state.doneTask;

	export const inputValue= state => state.inputValue;	
	
	export const isSelected = state => state.isSelected;
	

