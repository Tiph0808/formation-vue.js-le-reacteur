<script setup>
import { ref } from 'vue'

const counter = ref(0)

const decreaseValue = () => {
  counter.value = counter.value - 1
}

const increaseValue = () => {
  counter.value = counter.value + 1
}

const resetValue = () => {
  counter.value = 0
}
</script>

<template>
  <header>
    <font-awesome-icon :icon="['fas', 'calculator']" />
    <h1>Counter</h1>
  </header>
  <main>
    <div class="counter">
      <button @click="decreaseValue()">-</button>
      <p>{{ counter }}</p>

      <button @click="increaseValue()">+</button>
    </div>
    <button @click="resetValue()">Reset counter</button>
  </main>
  <footer>
    <p>
      Made with <a href="https://vuejs.org/" target="_blank">Vue.js</a> by
      <a href="https://www.lereacteur.io/" target="blank">Le Reacteur</a>
    </p>
  </footer>
</template>

<!-- Correction beaucoup plus simple pour les buttons ! :
 <button @click="counter --">-</button>
 <button @click="counter ++">+</button>
 et pour le reset :
 <button @click="counter = 0">reset<button>
 (pas besoin de fonctions je me suis compliqué la vie!)
-->

<style scoped>
/*-----Header-----*/
header {
  display: flex;
  gap: 20px;
  padding-left: 100px;
  border-bottom: 2px solid #127880;
  align-items: center;
  padding: 10px 0 10px 50px;
}

header svg {
  font-size: 25px;
  color: #127880;
}

/*----Main----*/

main {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

main > button {
  color: #127880;
  border-radius: 10px;
  padding: 5px;
  background-color: white;
  border: 2px solid #127880;
}

.counter {
  display: flex;
  gap: 20px;
  align-items: center;
}

.counter button {
  font-size: 25px;
  font-weight: bold;
  border: none;
  color: #127880;
  background-color: white;
}
.counter p {
  font-size: 30px;
}

/*---- Footer -----*/
footer > p {
  text-align: center;
}

footer a {
  color: #167e7f;
  text-decoration: none;
}
</style>
