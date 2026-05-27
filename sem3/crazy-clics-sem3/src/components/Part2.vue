<script setup>
const emit = defineEmits(['getRandomColor'])
</script>

<template>
  <button @click="emit('getRandomColor')">Couleur surprise</button>
</template>

<style scoped>
button {
  background-color: white;
  color: lightskyblue;
  border: 2px solid lightskyblue;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 20px;
}
</style>

<!-- style my way :
button {
  background-color:aquamarine
} 
  (le reste du style etant dans main.css)
-->
