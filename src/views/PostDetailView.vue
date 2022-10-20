<template>
  <div class="post-detail">
    <h1>Posts</h1>
    <p>Display the conten of post with ID of {{ $route.params.id }} here!</p>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>
<script setup></script>
