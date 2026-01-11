<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const userInfos = ref({})

onMounted(async () => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`)
    console.log(data)
    userInfos.value = data
  } catch (error) {
    console.log(error.message)
  }
})
</script>

<template>
  <main>
    <p>{{ userInfos.name }}</p>
    <p>{{ userInfos.email }}</p>
    <p>{{ userInfos.phone }}</p>
  </main>
</template>

<style scoped>
main {
  padding: 30px;
}
</style>
