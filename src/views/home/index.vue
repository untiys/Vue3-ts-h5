<template>
  <div @click="goLogin">首页</div>
  <div><button @click="add">count加1</button>{{ count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/pinia/index"
import { storeToRefs } from "pinia/dist/pinia"

const counterStore = useCounterStore()
const router = useRouter()

// 不使用 storeToRefs ，不是响应式数据
const { count, age } = storeToRefs(counterStore)
const goLogin = () => {
  router.push("/login")
}

const add = () => {
  // count.value++
  counterStore.increment()
}
</script>

<style lang="scss" scoped></style>
