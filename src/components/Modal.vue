<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />

      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>
<script setup>
/* prps */
const props = defineProps({
  modelValue: {
    type: Boolean,
    detault: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});
/* emits */
const emit = defineEmits(["update:modelValue"]);
/* handle btn click 
const handleButtonClick = () => {
  emit("update:modelValue", false);
};*/
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
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
