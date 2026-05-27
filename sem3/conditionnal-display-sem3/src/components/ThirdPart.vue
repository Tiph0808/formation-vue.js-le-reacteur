<script setup>
import { ref } from 'vue'
const wallet = ref(0)

const addOneEuro = () => {
  wallet.value++
}
const addFiveEuros = () => {
  wallet.value = wallet.value + 5
}
</script>

<template>
  <div class="third-part">
    <p v-if="wallet === 0">😱 Mon porte-monnaie est vide</p>
    <p v-else-if="wallet === 1">Mon premier euro ! 🤩</p>
    <p v-else-if="wallet > 30">🍾 &Ccedil;a y est je suis riche !! 🍾</p>
    <p v-else-if="wallet > 10">Yes ! Plus de 10 euros !</p>

    <p id="wallet">{{ wallet }} €</p>

    <div class="add-money">
      <button @click="addOneEuro">Ajouter 1€</button>
      <!-- on aurait pu simplifier en mettant la logique à executer entre les guillements du else if : v-else-if="wallet++" -->
      <button @click="addFiveEuros">Ajouter 5€</button>
      <!-- pareil ici : v-else-if="wallet +=5" -->
    </div>
  </div>
</template>

<style scoped>
.third-part {
  /* border: 1px solid blue; */
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

p {
  color: coral;
  font-weight: bold;
}

p:last-of-type {
  color: black;
}

button {
  background-color: white;
  padding: 5px 7px;
  border: 2px solid black;
  border-radius: 5px;
}

button:last-of-type {
  margin-left: 20px;
}

/* div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.add-money {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

div > p {
  color: orangered;
}

#wallet {
  color: black;
  font-weight: bold;
}

.add-money button {
  background-color: white;
  padding: 5px 7px;
  border: 1px solid black;
  border-radius: 5px;
} */
</style>
