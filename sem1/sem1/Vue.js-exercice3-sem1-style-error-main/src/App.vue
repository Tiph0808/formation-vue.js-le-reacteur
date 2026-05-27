<script setup>
// Import du tableau contenant la liste des animaux
import data from './assets/data.json'

// Import du composant
import Card from './components/Card.vue'
</script>

<template>
  <main>
    <h1>Animals for adoption</h1>

    <div class="container">
      <!-- Appel du composant 10 fois : une fois par animal -->
      <Card :animalInfos="data[0]" />
      <Card :animalInfos="data[1]" />
      <Card :animalInfos="data[2]" />
      <Card :animalInfos="data[3]" />
      <Card :animalInfos="data[4]" />
      <Card :animalInfos="data[5]" />
      <Card :animalInfos="data[6]" />
      <Card :animalInfos="data[7]" />
      <Card :animalInfos="data[8]" />
      <Card :animalInfos="data[9]" />
    </div>
  </main>
</template>

<style scoped>
main {
  /* border: 3px solid purple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: var(--main-blue);
  min-height: 100vh;
  min-width: 100vw;
}
main > div {
  /* border: 5px dotted pink; */
  display: flex;
  gap: 15px;
  flex: 1;
  /* width: 65vw; */
  flex-wrap: wrap;
}
</style>
