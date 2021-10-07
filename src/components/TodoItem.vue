<template>
  <div
    class="todo-item"
    v-bind:class="{ 'completed-item': todoitem.completed }"
  >
    <p>
      <input
        type="checkbox"
        v-bind:checked="todoitem.completed"
        v-on:change="handleChangeCheckbox"
      />
      {{ todoitem.task }}
      <button
        class="delete-item-btn"
        v-on:click="$emit('delete-item', todoitem.id)"
      >
        x
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoitem"],
  methods: {
    handleChangeCheckbox() {
      this.todoitem.completed = !this.todoitem.completed;
      this.$emit("save-new-list");
    },
  },
};
</script>

<style scoped>
.todo-item {
  max-width: 17.5rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}

.completed-item {
  text-decoration: line-through;
}

.delete-item-btn {
  font-size: x-small;
  float: right;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding-bottom: 3px;
}
</style>
