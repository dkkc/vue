<template>
  <div class="container">
    <div class="list-container">
      <h1 v-if="getDoneTasks.length" class="list-container__header red">Finished tasks</h1>
      <h1 v-else="getDoneTasks.length == 0" class="list-container__header">
        No tasks anymore
        <span class="done badge badge-primary badge-pill">{{getDoneTasks.length }}</span>
      </h1>
      <done-task-item :doneTasks="getDoneTasks" @deleteDoneTask="deleteDoneTask"></done-task-item>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import DoneTaskItem from "../components/Items/DoneTaskItem";

export default {
  methods: {
    ...mapActions("doneTasks", ["deleteDoneTask"])
  },

  computed: {
    ...mapGetters("doneTasks", ["getDoneTasks"])
  },
  components: {
    "done-task-item": DoneTaskItem
  }
};
</script>

<style>
.done {
  font-size: 24px;
  background-color: #2b1970;
}
.list-container__header {
  margin-bottom: 20px;
}
/*.input-label {*/
/*  margin-bottom: 20px;*/
/*  font-size: 22px;*/
/*  color: #2b1970;*/
/*}*/
/*.container {*/
/*  display: flex;*/
/* align-content: center;*/
/*}*/
/*.list-container {*/
/*  width: 30vw;*/
/*  margin: 1% 3%;*/
/*  padding: 30px;*/
/*  border: 1px solid #2b1970;*/
/*  !*border: 1px solid #1C1034;*!*/
/*  text-align: center;*/
/*}*/
/*.red {*/
/*  color: #2b1970;*/
/*}*/
</style>
