<script setup>
// import des donnees necessaires du fichier data.js
import { numbersList } from '../utils/data.js'
// console.log(numbersList)

const emit = defineEmits(['convertToCm'])
</script>

<template>
  <div>
    <button v-for="number in numbersList" :key="number" @click="emit('convertToCm', number)">
      {{ number }} km
    </button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 20px;
}

button {
  background-color: violet;
  border: none;
  padding: 5px 8px;
  border-radius: 5px;
}
</style>

<!-- style my way :

button {
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  color: lightskyblue;
  border: 3px solid lightskyblue;
  border-radius: 30px;
} 
  
-->
