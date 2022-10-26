<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea v-autofocus></textarea>
    <div>
      <button
        @click="increaseCounter(1)"
        class="counter-button"
        :class="{ yellow: oddOrEven === 'odd' }"
      >
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounter } from "@/use/useCounter";
/* posts */

const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
]);
/*counter btn */
const { counterData, increaseCounter, oddOrEven } = useCounter();
</script>
<style>
.counter-button {
  background-color: #03bd7e;
  border: none;
  color: white;
  font-size: 60px;
  width: 100%;
}
.counter-button.yellow {
  background-color: yellow;

  color: black;
}
</style>
