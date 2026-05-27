<script setup>
import { ref } from 'vue'
const isConnected = ref(false)
const connectUser = () => {
  isConnected.value = true
}
</script>
<template>
  <div>
    <button class="disconnection" v-if="isConnected" @click="isConnected = false">
      Se déconnecter
    </button>

    <div v-else>
      <button @click="connectUser">S'inscrire</button>
      <button @click="connectUser">Se connecter</button>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 5px 8px;
  border: 2px solid green;
  color: green;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 50px;
}

button:nth-child(2) {
  margin-left: 20px;
}

.disconnection {
  padding: 5px 8px;
  border: none;
  color: white;
  background-color: green;
  border-radius: 20px;
}
</style>
