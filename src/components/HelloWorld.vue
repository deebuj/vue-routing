
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(user,index) in users">
        <div v-on:click="getPosts(user.id)"> {{user.name}}</div>
      </li>
    </ul>
    <div>
      <input type ="text" v-model="newUser.name"/>
      <input type="button" value="Add User" v-on:click="addUser"/>
      <p>
        <input type="button" value="Fetch Users" v-on:click="getUsers"/>
      </p>
     
    </div>
    <PostsComponent v-bind:posts="posts"/>
  </div>
</template>

<script>
import userApi from "../api/userApi";
import PostsComponent from "./PostsComponent";

export default {
  name: "HelloWorld",
  components: { PostsComponent },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      newUser: { name: null },
      users: [{ name: "name1" }, { name: "name2" }],
      posts: []
    };
  },
  methods: {
    addUser: function() {
      this.users = [...this.users, JSON.parse(JSON.stringify(this.newUser))];
      this.newUser = {};
    },
    getUsers: async function() {
      this.users = await userApi.getUsers();
    },
    getPosts: async function(userId) {
      this.posts = await userApi.getPosts(userId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
