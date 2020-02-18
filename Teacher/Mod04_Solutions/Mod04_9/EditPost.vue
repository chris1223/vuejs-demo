<template>
  <div>
    <h3>Edit Post</h3>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-4" label="id" label-for="input-4">
        <b-form-input id="input-4" v-model="form.id" disabled></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="userId:"
        label-for="input-1"
        description="We'll nver share your userId with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.userId"
          type="text"
          required
          placeholder="Enter user id"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Title:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.title" required placeholder="Enter title"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Body:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.body" required placeholder="Enter body"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
//   name: "EditPost",
  methods: {
    ...mapActions(["editPostAction"]),
    onSubmit() {
      this.editPostAction(this.form);
      this.$router.push("/");
    }
  },
  data() {
    return {
      form: { }
    };
  },
  computed:{
      ...mapState(["posts"])
  },
  mounted(){
      const rid=Number.parseInt(this.$route.params.id),
      ar = this.posts,
      p = ar.find(o => o.id == rid);
      this.form = p;

  }
};
</script>

<style scoped>
</style>