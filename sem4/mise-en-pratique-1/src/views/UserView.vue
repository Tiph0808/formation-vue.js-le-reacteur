<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

console.log(props.id) // renvoie le params id envoyé en props du user selectionné dans la page UsersView

const userInfos = ref(null)

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
    <p v-if="userInfos === null">Loading...</p>
    <div v-else>
      <h1>{{ userInfos.name }}</h1>

      <p>{{ userInfos.email }}</p>
      <p>{{ userInfos.phone }}</p>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 30px;
}
</style>
