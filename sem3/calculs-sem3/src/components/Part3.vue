<script setup>
import { ref, computed } from 'vue'

const user = {
  firstName: 'Toto',
  lastName: 'Smith',
}

const currentTime = ref(new Date().getHours()) // cette expression avec combinaison des 2 methodes js renvoi un nombre correspondant a l'heure actuelle sans les minutes :)
console.log(currentTime.value)

// const sentence = computed(() => {
//   if (currentTime.value > 0 && currentTime.value < 12) {
//     return `Bonjour`
//   } else if (currentTime.value >= 12 && currentTime.value < 18) {
//     return `Bon après-midi`
//   } else {
//     return `Bonsoir`
//   }
// })

// correction :
const sentence = computed(() => {
  // on initialise une variable qui sera la sentence aavec une cdc vide:
  let greetings = ''
  if (currentTime.value < 12) {
    greetings = 'Bonjour, '
  } else if (currentTime.value < 18) {
    greetings = 'Bonne après-midi, '
  } else {
    greetings = 'Bonsoir, '
  }
  return greetings + ' ' + user.firstName + ' ' + user.lastName + ' !'
})

const morningTime = () => {
  currentTime.value = 8
}

const afternoonTime = () => {
  currentTime.value = 15
}
const eveningTime = () => {
  currentTime.value = 22
}
</script>
<template>
  <section>
    <!--My way :
     <p>{{ sentence }}, {{ user.firstName }} {{ user.lastName }} !</p> -->

    <!-- correction : toutes les infos sont return dans greetings grâce à une concatenation (cf. script ligne 33) -->
    <p>{{ sentence }}</p>

    <div>
      <button @click="morningTime">Heure de la matinée</button>
      <button @click="afternoonTime">Heure de l'après-midi</button>
      <button @click="eveningTime">Heure de la soirée</button>
    </div>

    <!-- correction pour les boutons avec la logique à executer direct entre les gillemets (beaucoup plus clair et plus rapide!): -->
    <!-- <button @click="currentTime=8">Heure de la matinée</button>
    <button @click="currentTime=16">Heure de l'après-midi</button>
    <button @click="currentTime=22">Heure de la soirée</button> -->
  </section>
</template>

<style scoped>
button {
  color: #39b974;
  border: 2px solid #39b974;
  padding: 5px 10px;
  background-color: white;
  border-radius: 3px;
}

/* On cible uniquement nos deux premiers bouttons : */
button:not(button:last-child) {
  margin-right: 10px;
}
</style>
