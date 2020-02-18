<template>
  <div class="heading">
    <h1>Posts App</h1>
    <h6>Let me hear your voices.</h6>
    <AddPost />
    <posts />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import AddPost from "@/components/AddPost.vue";

export default {
  name: "home",
  components: {
    Posts,
    AddPost
  }
};
</script>

<style>
#app {
  color: #2c3e50;
  background-color: rgb(252, 233, 198);
  padding: 50px;
}
body {
  background-color: rgb(252, 233, 198) !important;
}
</style>
