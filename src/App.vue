<template>
  <div id="app">
    <AddTodoForm v-on:add-todo="addTodoItem" />
    <TodoList
      v-bind:todolist="todoList"
      v-on:save-new-list="saveNewList"
      v-on:delete-item="deleteItem"
    />
  </div>
</template>

<script>
import initialTodoList from "./assets/InitialTodoList.js";
import TodoList from "./components/TodoList.vue";
import AddTodoForm from "./components/AddTodoForm.vue";

export default {
  name: "App",
  components: {
    TodoList,
    AddTodoForm,
  },
  data() {
    return {
      todoList: initialTodoList,
    };
  },
  methods: {
    saveNewList() {
      localStorage.setItem("initial_list", JSON.stringify(this.todoList));
    },
    deleteItem(id) {
      this.todoList = this.todoList.filter((todoItem) => todoItem.id != id);
      this.saveNewList();
    },
    addTodoItem(newTodoItem) {
      this.todoList = [...this.todoList, newTodoItem];
    },
  },
};
</script>

<style></style>
