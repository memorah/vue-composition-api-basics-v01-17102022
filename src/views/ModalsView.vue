<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
  </div>
  <div v-if="showModal" class="modal">
    <h1>This is modal</h1>
    <p>Lorem ipsum do lore</p>
    <button @click="showModal = false">Hide modal</button>
  </div>
</template>

<script setup>
/*imports*/
import { ref } from "vue";
/* modals */
const showModal = ref(false);
</script>
