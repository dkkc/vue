import uuid from "uuid";

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions';

const state = {
  todos: [
    { id: 1, action: "Przeczytac książkę", active: false },
    { id: 2, action: "Naprawić kosiarkę", active: false },
    { id: 3, action: "Kino - Sobota", active: false }
  ],

  inputValue: "",
  isChecked: true
};



export default {
	state,
	mutations,
	actions,
	getters
}
