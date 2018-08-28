<template lang="pug">
    .alert.alert-warning(v-if="!dismissed", @click="dismissed = true")
      b Work in progress! 
      span Check back for updates!
</template>

<script>
export default {
  name: "News",

  data() {
    return {
      dismissed: false
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  margin-bottom: 0;
}
</style>
