<template>
  <div id="app">
    <div class="link-container">
      <a class="todo" @click="activeComponent='TodoList'" type="button">SHOW TODO LIST </a>
      <a class="todo" @click="activeComponent='DoneTasksList'" type="button">DONE TASKS </a>
    </div>

    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import TodoList from "./containers/TodoList";
import DoneTasksList from "./containers/DoneTasksList";

export default {
    data() {
       return {
           activeComponent: 'TodoList'
       }
    },
  components: {
    TodoList,
    DoneTasksList,
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.container {
  width: 40vw;
  margin: 0 auto;
}
.link-container{
  margin-top: 2%;
  margin-left: -4%;
}
.list-container {
  width: 30vw;
  margin: 1% 3%;
  padding: 30px;
  border: 1px solid #2b1970;

  text-align: center;
}
.todo {
  cursor:pointer;
  font-size: 22px;
  color: #2b1970;
  margin: 20px 30px;
}
.todo:hover {
  /*border-bottom: 1px solid #2b1970;*/
  color:#ff0000;

}

#app {
  width: 100vw;
  margin: 0 auto;
  /*height: 100vh;*/
  display: block;
  text-align: center;
  /*background-color: #d5d7d87a;*/
}
</style>
