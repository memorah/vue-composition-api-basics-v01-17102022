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
<style>
.modal {
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #00bd7e;
  border-radius: 5px;
  color: white;
}
</style>
