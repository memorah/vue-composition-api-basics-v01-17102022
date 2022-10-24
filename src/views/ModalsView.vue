<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input v-model="showDarkModals" type="checkbox"
      /></label>
    </div>
    <pre>{{ showDarkModals }}</pre>
    <button @click="showModal = true">Show modal</button>
    <component
      :userData="userData"
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My modal title (via prop)"
    >
      <p>
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
      </p>
    </component>
  </div>
</template>

<script setup>
/*imports*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";
/* props */
const props = defineProps({ userData: { type: Object } });
/* modals */
const showDarkModals = ref(false);
const showModal = ref(false);
</script>
