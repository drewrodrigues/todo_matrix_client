<template lang="pug">
  div.TodoListInput
    input.form-control(
      placeholder="Add a new todo", 
      type="text",
      @keyup.enter="$emit('add', { text: title }); title = ''",
      v-model="title"
    )
    button.btn.btn-sm.float-right.text-white(
      @click="$emit('add', { text: title }); title = ''",
      :class="buttonClassName"
    )
      icon(name='plus')
</template>

<script>
export default {
  name: 'TodoListInput',

  props: {
    buttonClassName: String
  },

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
  position: relative;
}

.btn {
  position: absolute;
  right: 0px;
  padding: 7px !important;
  top: 1px;
  border-radius: 0 3px 3px 0 !important;
}
</style>
