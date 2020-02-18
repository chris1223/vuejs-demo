<template>
  <div>
    <h3>Posts</h3>
    <b-list-group>
      <b-list-group-item v-for="p in getAllPosts" v-bind:key="p.id">
        <strong>User Id :</strong>
        {{p.userId}}
        <br />
        <strong>Title :</strong>
        {{p.title}}
        <br />
        <strong>Body :</strong>
        {{p.body}}
        <br />
        <div class="mt-3">
          <b-button-group size="sm">
            <b-button variant="primary" @click="removePostAction(p.id)">Delete</b-button>
            <b-button variant="info" :to="`/edit/${p.id}`">Edit</b-button>
          </b-button-group>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts",
  computed: {
    ...mapGetters(["getAllPosts"])
  },
  methods: {
    ...mapActions(["getPostsAction" , "removePostAction"])
  },
  created() {
    if (this.getAllPosts.length <= 0) {
      this.getPostsAction();
    }
  }
};
</script>

<style scoped>
.list-group-item {
  color: brown;
}
</style>