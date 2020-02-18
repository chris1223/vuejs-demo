<template>
  <div class="container" id="app">
    <div class="heading">
      <h1>Posts App</h1>
      <h6>Sessing all posts.</h6>
    </div>
    <posts />
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";

export default {
  name: "app",
  components: {
    Posts
  }
};
</script>

<style>
#app {
  color:#2c3e50;
  background-color: rgb(252,233,198);
  padding:50px
}
body{
  background-color: rgb(252,233,198) !important
}
</style>
