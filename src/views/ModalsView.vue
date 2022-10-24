<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-model="showModal" title="My modal title (via prop)">
      <p>
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
      </p>
    </Modal>
  </div>
</template>

<script setup>
/*imports*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

/* modals */
const showModal = ref(false);
</script>
