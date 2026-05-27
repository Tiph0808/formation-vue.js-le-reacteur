<script setup>
import { ref, computed } from 'vue'

const numbers = ref([76, 876, 467, 2, 67, 3, 90, 7, 678])

const average = computed(() => {
  let total = 0
  for (let i = 0; i < numbers.value.length; i++) {
    total = total + numbers.value[i]
  }
  return total / numbers.value.length
})

// RMQ : On aurait pu stocker numbers.value[i] dans une variable pour clarifier le code

const addNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000)
  numbers.value.push(randomNumber)
}
</script>

<template>
  <section>
    <p>Moyenne du tableau : {{ numbers }}</p>
    <p id="average">{{ average }}</p>
    <button @click="addNumber">Ajouter un nombre aléatoire</button>
  </section>
</template>

<style scoped>
p:nth-child(2) {
  font-weight: bold;
  color: #7676d8;
}

button {
  background-color: white;
  color: #7676d8;
  border: 2px solid #7676d8;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>
