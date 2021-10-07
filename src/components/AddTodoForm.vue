<template>
  <div class="add-todo-form">
    <form v-on:submit.prevent="addTodo">
      <input type="text" placeholder="Add Todo..." v-model="task" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import uuid from "uuid/v4";
export default {
  name: "AddTodoForm",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTodo() {
      const newTodoItem = {
        id: uuid(),
        task: this.task,
        completed: false,
      };
      this.$emit("add-todo", newTodoItem);
    },
  },
};
</script>

<style scoped>
form {
  max-width: 18.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
input[type="text"] {
  flex-basis: 80%;
  margin-right: 0.5rem;
}
input[type="submit"] {
  flex-basis: 20%;
}
</style>
