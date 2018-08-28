<template lang="pug">
  div
    .alert(:class="['alert-' + className]")
      span(v-html="message")
</template>

<script>
export default {
  name: 'Flash',

  props: {
    message: String,
    className: String
  }
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  top: 0;
  right: 0;
}
</style>


