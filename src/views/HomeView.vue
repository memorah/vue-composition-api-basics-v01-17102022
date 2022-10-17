<template>
  <div class="home">
    <h1>HOME</h1>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    const increaseCounter = () => {
      counter.value++;
    };
    const decreaseCounter = () => {
      counter.value--;
    };
    return {
      counter,
      increaseCounter,
      decreaseCounter,
    };
  },
};
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
