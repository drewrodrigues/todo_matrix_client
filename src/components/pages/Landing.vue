<template lang="pug">
  div 
    .jumbotron 
      h1.display-4 Tasks made simple
      p.lead Stay efficient and on top of your most important tasks.
      hr.my-4
      p Check it out! It's free and always will be!
      router-link(tag='a', to="/dashboard").btn.btn-success Try now
    .container-fluid
      .row.text-center
        .col-md-4
          .card
            .card-body
              img(src="./../../assets/list.png").feature-icon
              h5.card-title Prioritize your tasks
              p.card-text By selecting which section your task is placed, it becomes much easier to know what needs to be done now.
        .col-md-4
          .card
            .card-body
              img(src="./../../assets/notepad.png").feature-icon
              h5.card-title Keep track of productivity
              p.card-text Once a task is complete, your productivity for the day will increase by 1. Overtime you will see how productive you are.
        .col-md-4
          .card
            .card-body
              img(src="./../../assets/calendar.png").feature-icon
              h5.card-title Stay organized
              p.card-text With every task, you can add notes, due date and other information. Keep it all information in one place so you never forget.
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style lang="scss" scoped>
.feature-icon {
  margin-bottom: 20px;
}
</style>

