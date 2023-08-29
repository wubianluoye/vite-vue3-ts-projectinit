<template>
  <div>
    <p>home page</p>
    <p>store {{ homeStore.count }}</p>
    <button @click="homeStore.increment">+</button>
    <button @click="homeStore.decrement">-</button>
    <div>
      <p>router jump</p>
      <button @click="router.push('/home/detail')">router to detail</button>
      <div>
        <router-link to="/home/detail">link router to detail</router-link>
      </div>
    </div>
    <HelloWorld :msg="homeName" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import HelloWorld from "@/components/HelloWorld.vue"
import { useHomeStore } from "@/store/index"
import { useRouter } from "vue-router"
const router = useRouter()

const homeStore = useHomeStore()

const homeName = ref("hello home")
</script>

<style scoped lang="scss">
// scoped styles go here
</style>
