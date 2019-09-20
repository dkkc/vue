<template>
  <div>
    <ul>

      <li class="list-item list-group-item d-flex justify-content-between align-items-center"
          v-for="(doneTask,index) in doneTasks">
        <label>
          <input class='done-checked' type="checkbox">
        </label>
        {{doneTask.action}}
        <span @click="deleteDoneTask(index)" class="span-button badge  "><i class="trash far fa-trash-alt"></i></span>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: ['doneTasks'],
    methods: {
      deleteDoneTask(id) {
          this.$emit('deleteDoneTask' , id);
      }
    }
};
</script>

<style scoped>
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
  .span-button {
    display: flex;
    cursor:pointer;
    width: 30px;
    height: 30px;
  }
  .span-button .trash {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
</style>
