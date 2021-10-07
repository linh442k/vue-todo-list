<template>
  <div id="todo-list">
    <div v-bind:key="item.id" v-for="item in todolist">
      <TodoItem
        v-bind:todoitem="item"
        v-on:delete-item="$emit('delete-item', item.id)"
        v-on:save-new-list="$emit('save-new-list')"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  props: ["todolist"],
  components: {
    TodoItem,
  },
};
</script>
