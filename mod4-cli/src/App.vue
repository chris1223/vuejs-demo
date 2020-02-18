<template>
  <div class="container" id="app">
    <b-nav tabs fill id="nav">
      <b-nav-item id="navhome" @click="isActive=true" to="/" :active="isActive">
        Home
      </b-nav-item>
      <b-nav-item id="navabout" @click="isActive=false" to="/About" :active="!isActive">
        About
      </b-nav-item>
    </b-nav>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return {
      isActive:true
    }
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
