<template>
  <div>
    <p>detail</p>
    <button @click="router.push('/home')">jump to home</button>
    <router-link to="/home">link to home</router-link>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()
</script>
<style lang="scss" scoped></style>
