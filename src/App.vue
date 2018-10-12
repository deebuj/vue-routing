<template>
  <div id="container1" class="container">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 ">
        <h1>Routing</h1>
          <app-header></app-header>
          <hr>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
#container1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
