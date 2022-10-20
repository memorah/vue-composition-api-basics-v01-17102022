<template>
  <div class="post-detail">
    <h1>Posts</h1>
    <p>Display the conten of post with ID of {{ $route.params.id }} here!</p>
    <div><button @click="showPostId">Show post ID</button></div>
  </div>
  <div><button @click="goHomeIn3Seconds">Go Home in 3s</button></div>
  <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`the ID of this post is: ${route.params.id}`);
};
const goHomeIn3Seconds = () => {
  setTimeout(() => router.push({ name: "home" }), 3000);
};
</script>
