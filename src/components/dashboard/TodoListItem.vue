<template lang="pug">
  transition(name="slide")
    li.list-group-item
      //--> TITLE <--
      span(:class="{ complete: complete }") {{ this.title }}

      .float-right.btn-group
        //- TODO: add event to update complete attribute
        button.btn.btn-sm(@click="$emit('delete')") 
          icon.icon(name="trash")
        button.btn.btn-sm
          icon.icon(name="check")

      br

      //--> CONTENT <-- 
      //- TODO: add edit component
      span.text-muted(v-if="this.content") {{ " " + this.content }}
      .card(v-if="showEditMenu")
        .card-body
          p Edit menu here
          button.btn.btn-sm.btn-success(
            @click="showEditMenu = !showEditMenu"
          ) Save
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

<style lang="scss" scoped>
.complete {
  text-decoration: line-through;
}

p {
  padding: 0;
  margin: 0;
}

.list-group-item {
  position: relative;
}

.dropdown-toggle {
  position: absolute;
  top: -6px;
  right: -12px;
}

.btn-group {
  position: absolute;
  right: 5px;
  top: -1px;
}

.btn {
  padding: 12px 10px !important;
  color: #ccc;

  &:hover {
    color: #aaa;
  }
}

.slide-enter {
  margin-right: 100px;
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.75s ease-out;
}

.slide-leave {
  opacity: 1;
}

.slide-leave-active {
  transition: all 0.75s ease-out;
  margin-right: 100px;
  opacity: 0;
}
</style>
