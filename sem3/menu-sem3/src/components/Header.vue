<script setup>
import data from '../assets/data.json'
const props = defineProps({
  data: Array,
})

const emit = defineEmits(['elementSelected'])
</script>

<template>
  <header>
    <button v-for="element in data" :key="element.id" @click="emit('elementSelected', element)">
      {{ element.title }} <span>({{ element.category }})</span>
    </button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  height: var(--header-height);
  align-items: center;
}

button {
  font-weight: bold;
  border: 1px solid var(--yellow);
  background-color: white;
  padding: 7px 10px;
  color: var(--yellow);
}

span {
  color: black;
}
</style>

<!-- MY WAY : (attention la correction aura surement changé aussi la structure du template)

<style scoped> 
header {
  /* border: 1px solid green; */
  height: 150px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

header > div {
  /* border: 1px solid red; */
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}

button {
  padding: 10px 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: white;
  border: 3px solid #f6ab09;
  border-radius: 5px;
}

button span {
  color: #f6ab09;
  padding-right: 5px;
  font-weight: bold;
}
</style> -->
