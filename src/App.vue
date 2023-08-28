<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"

import { ref } from "vue"

const age = ref<number>()
const name = ref<string>()
const changeInfo = () => {
  age.value = 45
  name.value = "zhangsan"
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeInfo">change</button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
