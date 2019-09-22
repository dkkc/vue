<template>
  <div class="container">
    <div class="list-container">
      <h1 v-if='getTodoList.length <=0' class="list-container__header red">There is no actions to do ;-)</h1>
      <h1 v-else='getTodoList.length' class="list-container__header">ToDo Actions <span class="todos badge badge-primary badge-pill">{{ getTodoList.length}}</span></h1>
      <label class="input-label">Add ToDo:</label>
      <input-action :actionName="inputValue" @addTodoInputChangeHandler="addTodoInputChangeHandler"  ></input-action>
      <item-view :todos="getTodoList" @deleteTodoAction="deleteTodo"  @deleteSelectedTodo="changeTodoHandler">todo.action</item-view>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Item from "../components/Items/Item";
import InputAddTodoComponent from "../components/Input/InputAddTodoComponent";


export default {
  methods: {
    ...mapActions(["deleteTodo", "addTodoInputChangeHandler",'changeTodoHandler'])
  },

  computed: {
    ...mapGetters(["getTodoList",  "inputValue",'isSelected'])
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

</style>
