<template lang="pug">
  li.list-group-item
    span(:class="{ complete: complete }") {{ this.title }}
    ul.nav.float-right
      li.dropdown-toggle.btn.btn-sm.btn-light(@click="showDropdownMenu = !showDropdownMenu")
      div(v-if="showDropdownMenu")
        //- TODO: add event to update complete attribute
        button.btn.btn-sm.btn-light Mark Complete
        button.btn.btn-sm.btn-light(@click="showEditMenu = !showEditMenu") Edit
        button.btn.btn-sm.btn-light(
          @click="$emit('delete')"
        ) Delete
    br
    //- TODO: add edit component
    span.text-muted(v-if="this.content") {{ " " + this.content }}
    .card(v-if="showEditMenu")
      .card-body
        p Edit menu here
        button.btn.btn-sm.btn-success(@click="showEditMenu = !showEditMenu") Save
</template>

<script>
export default {
  name: 'TodoListItem',

  props: {
    id: Number,
    title: String,
    content: String,
    complete: Boolean
  },

  data() {
    return {
      showDropdownMenu: false,
      showEditMenu: false
    }
  }
}
</script>

<style lang="scss">
.complete {
  text-decoration: line-through;
}

p {
  padding: 0;
  margin: 0;
}
</style>
