<template lang="pug">
  div.TodoListInput
    input.form-control(
      placeholder="Add a new todo", 
      type="text",
      @keyup.enter="$emit('add', { text: title }); title = ''",
      v-model="title"
    )
</template>

<script>
export default {
  name: 'TodoListInput',

  data() {
    return {
      title: ""
    }
  }
}
</script>

<style lang="scss">
.TodoListInput {
  margin-top: 10px;
}
</style>
