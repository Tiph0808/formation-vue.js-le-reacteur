<script setup>
import { ref, computed } from 'vue'
import Article from './components/Article.vue'
import Book from './components/Book.vue'
import Header from './components/Header.vue'

// console.log(data)

// on crée une valeur reactive ou l'on stockera l'element selectionné, les elements sont des objets donc on initialise notre valeur reactive avec un objet vide :
const selection = ref({})

const selectElement = (element) => {
  selection.value = element
}

const averageRate = computed(() => {
  let total = 0
  // notre tableau de rates se trouve a la clé selection.value.rates, on crée donc une variable pour faciliter la syntaxe :
  const ratesList = selection.value.rates
  for (let i = 0; i < ratesList.length; i++) {
    total = total + ratesList[i]
  }
  return total / ratesList.length
})
</script>

<template>
  <Header @elementSelected="selectElement" />

  <main>
    <Article
      v-if="selection.category === 'article'"
      :selection="selection"
      :average="averageRate"
    />

    <Book
      v-else-if="selection.category === 'livre'"
      :selection="selection"
      :average="averageRate"
    />

    <p v-else>Faites votre choix !</p>
  </main>

  <footer>
    <button @click="selection = {}">Reset</button>
  </footer>
</template>

<style scoped>
p {
  font-weight: bold;
  font-size: 30px;
  text-shadow: 1px 1px 2px var(--yellow);
}

main {
  /* background-color: pink; */
  /*pour que le main prenne tout l espace dispo : 100vh - taille du header - taille du footer*/
  height: calc(100vh - (var(--header-height)) - (var(--footer-height)));
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  display: flex;
  height: var(--footer-height);
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}

button {
  background-color: #f6ab09;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
}
</style>

<!-- style my way :  
<style scoped>
main {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #f6ab09;
}

footer {
  padding: 50px;
  display: flex;
  justify-content: flex-end;
}

footer button {
  background-color: #f6ab09;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
}
</style> -->
