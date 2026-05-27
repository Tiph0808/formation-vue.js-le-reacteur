<script setup>
const displayNumber = () => {
  alert(Math.floor(Math.random() * 100))
}
/*correction de cette partie : on peut stocker le numero aleatoire dans une variable: 
const displayNumber=()=>{
const randomNumber= Math.floor(Math.random()*100)
et ensuite créer l'alert:
alert('randomNumber')
} */
</script>

<template>
  <section>
    <button @click="displayNumber">Chiffre surprise</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
}
button {
  height: 120px;
  width: 120px;
  border-radius: 50%; /*pour obtenir un rond :) */
  background-color: #ff7f50;
  color: white;
  font-weight: bold;
  border: double thick white;
}
</style>
