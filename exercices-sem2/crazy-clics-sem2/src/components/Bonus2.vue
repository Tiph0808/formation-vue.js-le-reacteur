<script setup>
const colorsList = [
  'bleu',
  'vert',
  'rose',
  'orange',
  'violet',
  'marron',
  'jaune',
  'noir',
  'rouge',
  'gris',
]

// const randomColor = (tab) => {
//   alert(tab[Math.floor(Math.random() * tab.length)])
// }

// correction, plus simple (sans donner d'arg a la fonction randomColor) : on cree la variable randomIndex qui va stocker un chiffre entre zero et 9 ( car c'est l'index du dernier element du tab) :
const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorsList.length)
  alert(colorsList[randomIndex])
}
</script>

<template>
  <!-- Attention: si jutilise ma methode je dois donner l'argument (tab) a la fontction : @click = "randomColor(colorsList)" -->

  <main>
    <section>
      <button @click="randomColor">Couleur surprise</button>
    </section>
  </main>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
}

section > button {
  font-size: 18px;
  color: purple;
  border-color: purple;
  background-color: white;
  padding: 8px;
  border-radius: 30px;
}
</style>
