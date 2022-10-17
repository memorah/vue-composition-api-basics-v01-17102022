<template>
  <div class="home">
    <h1>{{ appTitle }}</h1>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
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

const counterData = reactive({ count: 0, title: "My Counter" });
const increaseCounter = (amount) => {
  counterData.count = counterData.count + amount;
};
const decreaseCounter = (amount) => {
  counterData.count = counterData.count - amount;
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
