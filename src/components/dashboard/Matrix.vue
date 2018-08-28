<template lang="pug">
  div
    table.table.table-bordered
      tr
        td.bg-success 
          span Important & Urgent
          span.float-right.badge.badge-light(v-text="incompleteTodosWithPriority(1) + ' left'")
        td.table-success 
          span Important & Not Urgent
          span.float-right.badge.badge-light(v-text="incompleteTodosWithPriority(2) + ' left'")
      tr
        each i in [1, 2]
          td
            span(v-for="(todo, index) in getTodosWithPriority("+ i + ")")
              TodoListItem(
                :id="todo.id",
                :title="todo.title",
                :content="todo.content",
                :complete="todo.complete",
                @delete="deleteTodo(todo.id, index)"
              )
            TodoListInput(
              @add="addTodo($event.text, " + i + ")" 
            )
      tr
        td.bg-danger
          span Not Important & Urgent
          span.float-right.badge.badge-light(v-text="incompleteTodosWithPriority(3) + ' left'")
        td.table-danger
          span Not Important & Not Urgent
          span.float-right.badge.badge-light(v-text="incompleteTodosWithPriority(4) + ' left'")
      tr
        each i in [3, 4]
          td
            span(v-for="(todo, index) in getTodosWithPriority("+ i + ")")
              TodoListItem(
                :id="todo.id",
                :title="todo.title",
                :content="todo.content",
                :complete="todo.complete",
                @delete="deleteTodo(todo.id, index)"
              )
            TodoListInput(
              @add="addTodo($event.text, " + i + ")" 
            )
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import TodoListInput from './TodoListInput.vue'
import axios from 'axios'

const baseURL = 'http://localhost:3000/'

export default {
  name: 'Matrix',

  components: {
    TodoListItem,
    TodoListInput
  },

  data() {
    return {
      todos: []
    }
  },

  created() {
    axios.get(baseURL + 'todos')
    .then(res => {
      this.todos = res.data;
    })
    .catch(() => {
      this.$emit('add-flash', "Failed to <b>connect</b>", "danger")
    })
  },

  methods: {
    getTodosWithPriority: function(priority) {
      return this.todos.filter(todo => todo.priority === priority)
    },

    incompleteTodosWithPriority: function(priority) {
      return this.getTodosWithPriority(priority).filter(todo => !todo.complete).length
    },

    addTodo: function(todo, priority) {
      axios.post(baseURL + 'todos', {
        title: todo,
        priority: priority
      })
      .then(res => {
        this.todos.push(res.data)
        this.$emit('add-flash', "Successfully <b>added</b> item", "success")
      })
      .catch(() => {
        this.$emit('add-flash', "Failed to </b>add</b> item", "danger")
      })
    },

    deleteTodo: function(id, index) {
      // FIXME: bug when opening dropDownMenu or editMenu, then deleting the todo
      // the todo below it will then have the same component data, making it where
      // the menus are still open
      axios.delete(baseURL + 'todos/' + id)
      .then(res => {
        this.$delete(this.todos, index)
        this.$emit('add-flash', "Successfully <b>deleted</b> item", "success")
      })
      .catch(() => {
        this.$emit('add-flash', "Failed to <b>delete</b> item", "danger")
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
