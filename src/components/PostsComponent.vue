<template>
 <div>
    <h3>User Posts</h3>
    <div v-for="(post,index) in posts">
      <h4>{{post.title}}</h4>
      <div>{{post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsComponent",
  props: ["posts"]
};
</script>
