<template>
  <div class="home">
    <h1>{{ appTitle }}</h1>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>edit counter title:</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const appTitle = "My Amazing counter App";
//const counter = ref(0),
// counterTitle = ref("My Counter");
const counterData = reactive({ count: 0, title: "My Counter" });
const increaseCounter = () => {
  counterData.count++;
};
const decreaseCounter = () => {
  counterData.count--;
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
.edit {
  margin-top: 60px;
}
</style>
