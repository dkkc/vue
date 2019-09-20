import uuid from "uuid";

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions';

const state = {
  todos: [
    { id: 1, action: "Przeczytac książkę", active: true },
    { id: 2, action: "Naprawić kosiarkę", active: true },
    { id: 3, action: "Kino - Sobota", active: true }
  ],

  inputValue: "",
};



export default {
	state,
	mutations,
	actions,
	getters
}
