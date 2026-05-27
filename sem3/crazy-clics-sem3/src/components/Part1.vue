<script setup>
import { wordsList } from '@/utils/data'

// definition evenement :
const emit = defineEmits(['correctTheWord'])
</script>

<template>
  <div>
    <button v-for="word in wordsList" :key="word" @click="emit('correctTheWord', word)">
      {{ word }}
    </button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 20px;
}

button {
  background-color: aquamarine;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
}
</style>

<!-- style my way :
button {
  background-color:aquamarine
} 
  (le reste du style etant dans main.css)
-->
