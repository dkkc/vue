import Vue from 'vue';
import Vuex from "vuex";

import todos from './modules/todos/todos';
import doneTasks from './modules/doneTasks/doneTasks';

Vue.use(Vuex);

export const store = new Vuex.Store({
 modules: {
	 todos,
   doneTasks,

 },


});
