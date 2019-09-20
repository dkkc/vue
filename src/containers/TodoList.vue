<template>
  <div class="container">
    <div class="list-container">
      <h1 v-if='getTodoList.length <=0' class="list-container__header red">There is no actions to do ;-)</h1>
      <h1 v-else='getTodoList.length' class="list-container__header">ToDo Actions <span class="todos badge badge-primary badge-pill">{{ getTodoList.length}}</span></h1>
      <label class="input-label">Add ToDo:</label>
      <input-action :actionName="inputValue" @addTodoInputChangeHandler="addTodoInputChangeHandler"></input-action>
      <item-view :todos="getTodoList" @deleteTodoAction="deleteSelectedTodo">todo.action</item-view>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Item from "../components/Items/Item";
import InputAddTodoComponent from "../components/Input/InputAddTodoComponent";


export default {
  methods: {
    ...mapActions(["deleteSelectedTodo", "addTodoInputChangeHandler",])
  },

  computed: {
    ...mapGetters(["getTodoList",  "inputValue"])
  },
  components: {
    "item-view": Item,
    "input-action": InputAddTodoComponent,

  }
};
</script>


<style >
  .todos {
    font-size: 24px;
    background-color: #2b1970;
  }
  .list-container > .input-label {
    font-size: 24px;
    color: #2b1970;

  }
.list-container__header {
  margin-bottom: 20px;
}
/*.input-label {*/
/*margin-bottom: 40%;*/
/* font-size: 22px;*/
/*color: #2b1970;*/
/*}*/
/*.container {*/
/*  display: flex;*/
/*  align-content: center;*/
/*}*/
/*.list-container {*/
/*  width: 30vw;*/
/*  margin: 1% 3%;*/
/*  padding: 30px;*/
/*  border: 1px solid #2b1970;*/
/*  !*border: 1px solid #1C1034;*!*/
/*  text-align: center;*/
/*}*/
/*  .red {*/
/*    color: #2b1970;*/
/*  }*/
</style>
