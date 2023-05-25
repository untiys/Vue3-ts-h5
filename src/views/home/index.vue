<template>
  <div @click="goLogin" class="add">首页</div>
  <van-notice-bar
    left-icon="volume"
    text="本期浔积分在2023年12月31日 23点清零，请及时使用！"
  />
  <van-button type="success" @click="add">count加1</van-button>
  <div class="count">50</div>
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

<style lang="scss" scoped>
.add {
  color: #363a44;
  font-size: 18px;
  font-weight: 600;
}
.count {
  font-size: 41px;
}
</style>
