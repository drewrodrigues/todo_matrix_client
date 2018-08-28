<template lang="pug">
  #app
    News
    NavBar
    router-view(
      @add-flash="addFlash"
    )
    .alert-container
      Flash(v-for="message in flashMessages", :message="message.message", :className="message.className")
</template>

<script>
import News from './components/shared/News.vue'
import NavBar from './components/shared/NavBar.vue'
import Flash from './components/shared/Flash.vue'

export default {
  name: 'app',
  components: {
    News,
    NavBar,
    Flash
  },

  data() {
    return {
      flashMessages: []
    }
  },

  methods: {
    addFlash(message, className) {
      this.flashMessages.push({message: message, className: className})
      setTimeout(() => {
        this.flashMessages.pop(message)
      }, 3500)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  font-family: 'Roboto', sans-serif;
  background-image: url('./assets/bkg.png');
  background-repeat: repeat;
}

.alert-container {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
