<script setup>
import AnimalDetails from '../components/AnimalDetails.vue'
// Déclaration de la props qui contient les informations d'un animal
const props = defineProps({
  animalInfos: Object
})

console.log(props.animalInfos)
</script>

<template>
  <div class="card" :class="{ opacity: animalInfos.alreadyAdopted === true }">
    <AnimalDetails :name="animalInfos.name" :species="animalInfos.species" :age="animalInfos.age" />

    <p class="description">{{ animalInfos.description }}</p>
  </div>
</template>

<style scoped>
.card {
  /* border: 3px solid red; */
  background-color: rgb(244, 246, 247);
  padding: 15px;
  border-radius: 5px;
  width: calc((100% - 15px) / 2);
  display: flex;
  gap: 10px;
  flex-direction: row;
  box-shadow: 0px 0px 7px var(--shadow-color);
}

.description {
  flex: 1;
}

.card p {
  color: var(--paragraph-color);
}

.opacity {
  opacity: 0.2;
}

/***Media Query***/

@media (max-width: 900px) {
  .card {
    width: 100%;
    /*on dit a chaque carte de prendre toute la largeur de son parent */
  }
}

@media (max-width: 500px) {
  .card {
    flex-direction: column;
  }
}
</style>
