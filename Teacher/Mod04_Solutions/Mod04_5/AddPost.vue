<template>
  <div>
    <h3>Add Post</h3>
    <b-form @submit.prevent="onSubmit">
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
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addPostAction"]),
    onSubmit() {
      this.addPostAction(this.form);
      this.form = {
        userId: "",
        title: "",
        body: ""
      };
    }
  },
  data() {
    return {
      form: {
        userId: "",
        title: "",
        body: ""
      }
    };
  }
};
</script>

<style scoped>
</style>