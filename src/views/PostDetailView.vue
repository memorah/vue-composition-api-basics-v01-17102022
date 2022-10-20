<template>
  <div class="post-detail">
    <h1>Posts</h1>
    <p>Display the conten of post with ID of {{ $route.params.id }} here!</p>
    <div><button @click="showPostId">Show post ID</button></div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const showPostId = () => {
  alert(`the ID of this post is: ${route.params.id}`);
};
</script>
