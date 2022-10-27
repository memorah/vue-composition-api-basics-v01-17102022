<template>
  <div class="user-data">
    {{ userData.name }} | @{{ userData.username }} | Network status:
    <span :style="{ color: online ? 'inherit' : 'red' }">{{
      online ? "Online" : "Offline"
    }}</span>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <RouterView :userData="userData" />
</template>
<script setup>
import { reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useOnline } from "@vueuse/core";

/* user data */
const userData = reactive({
  name: "Filip",
  username: "Filipname",
});
/* online status */
const online = useOnline();
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.user-data {
  position: absolute;
  background-color: white;
  color: #00bd7e;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px 15px;
}
</style>
