<template>
  <div class="  ">
    <ul class="list-group font ">
      <li class="list-item list-group-item d-flex justify-content-between align-items-center"
        :key="todo.id" v-for="(todo,index) in todos">
        <label>
          <input class='done-checked' type="checkbox">
        </label>
        {{todo.action}}
        <button class="span-button badge" @click="deleteTodoAction(index)"><i class="trash far fa-trash-alt"></i></button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props:['todos'],
  methods: {
    deleteTodoAction(id) {
      this.$emit("deleteTodoAction", id);
    }
  }
};
</script>

<style lang="scss" >

  .done-checked{
    width: 20px;
    height: 20px;
    margin-top: 12px;
  }

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-top: 10px;
  font-size: 20px;
  color: #172330;

}
.item-button {
  margin-left: 240px;
  cursor: pointer;
}

.span-button {
  display: flex;
  cursor:pointer;
  width: 32px;
  height: 30px;
}
.span-button .trash {
  display: flex;
  align-items: center;
  font-size: 18px;
}
</style>
