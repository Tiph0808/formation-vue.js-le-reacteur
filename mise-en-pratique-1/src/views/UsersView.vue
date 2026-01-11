<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const usersList = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    usersList.value = data
  } catch (error) {
    console.log(error.message)
  }
})
</script>
<template>
  <main>
    <p v-if="usersList.length === 0">Loading...</p>

    <RouterLink
      :to="{
        name: 'user',
        params: { id: user.id },
      }"
      v-for="user in usersList"
      :key="user.id"
    >
      <p>- {{ user.username }}</p>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  padding: 10px 30px;
}

p {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
