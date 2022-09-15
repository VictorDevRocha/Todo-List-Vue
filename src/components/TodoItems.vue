<template>
  <!-- Todo items -->
  <div class="space-y-2">
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
  <!--/ Todo items -->
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
};
</script>
