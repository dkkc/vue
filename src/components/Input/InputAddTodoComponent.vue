<template>
  <div class="input">
    <input
      class="input-action"
      type="text"
      v-model="todo"
      @keydown.enter="addTodoInputChangeHandler"
    />
  </div>
</template>

<script>
export default {
  props: {
    actionName: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addTodoInputChangeHandler() {
        if(this.todo === '') {
            alert('You have to type some action')
        }else {
            this.$emit("addTodoInputChangeHandler", this.todo);
        }

      this.todo = "";
    }
  }
};
</script>

<style scoped>
.input-action {
  margin: 20px 0 30px;
  width: 56%;
  height: 30px;
  font-size: 22px;
  text-align: center;
}

  .input-action:focus {
    border: 1px solid #2b1970;
  }
</style>
