<template>
  <div>
    <h3>Posts</h3>
    <b-list-group>
      <b-list-group-item v-for="p in getAllPosts" v-bind:key="p.id">{{p.title}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Posts",
  computed:mapGetters(["getAllPosts"])
};
</script>

<style scoped>
.list-group-item{
    color:brown;
}
</style>