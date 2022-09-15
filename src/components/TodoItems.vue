<template>
  <!-- Todo items -->
  <div class="space-y-2">
    <TodoItem v-for="todo in $store.state.todos" :key="todo.id" :todo="todo" />
  </div>
  <!--/ Todo items -->
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
};
</script>
