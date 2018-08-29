<template lang="pug">
  - // FIXME: how do we spread this over multiple lines?
  - const matrixBlocks = [{title: 'Important & Urgent', priority: 1, className: 'bg-primary', buttonClassName: 'btn-primary'}]
  - matrixBlocks.push({title: 'Important & Not Urgent', priority: 2, className: 'bg-success', buttonClassName: 'btn-success'})
  - matrixBlocks.push({title: 'Not Important & Urgent', priority: 3, className: 'bg-warning', buttonClassName: 'btn-warning'})
  - matrixBlocks.push({title: 'Not Important & Not Urgent', priority: 4, className: 'bg-danger', buttonClassName: 'btn-danger'})

  div#matrix
    .container-fluid
      .row
        for block in matrixBlocks
          .col-md-6
            .card
              .card-header.text-white(class=block.className)
                span= block.title
                //- TODO: review the interpolation here
                span.float-right.badge.badge-light(v-text=`incompleteTodosWithPriority(${block.priority}) + ' left'`)
              .card-body
                ul.list-group
                  TodoListItem(
                    v-for="(todo, index) in getTodosWithPriority("+ block.priority + ")"
                    :id="todo.id",
                    :title="todo.title",
                    :content="todo.content",
                    :complete="todo.complete",
                    @delete="deleteTodo(todo.id, index)"
                  )
                TodoListInput(
                  buttonClassName=`${block.buttonClassName}`,
                  @add="addTodo($event.text, " + block.priority + ")"
                )
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import TodoListInput from './TodoListInput.vue'
import axios from 'axios'

// TODO: make this a const through the application depending on the ENV
// FIXME: bug with deleting components. When deleting an element on production
// a different component is deleted, even though the correct record is deleted
const baseURL = 'https://todo-matrix-server.herokuapp.com/'

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
#matrix {
  margin-top: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
