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

    <div v-else>
      <h1>UsersView Component</h1>

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
    </div>
  </main>
</template>

<style scoped>
p {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
