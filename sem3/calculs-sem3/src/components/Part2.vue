<script setup>
import { ref, computed } from 'vue'

const users = ref([
  {
    id: 1,
    name: 'Sarah',
    age: 30,
    books: [
      {
        title: 'Lorem ipsum',
        numOfPages: 352,
      },
      {
        title: 'Totam perspiciatis',
        numOfPages: 3057,
      },
      {
        title: 'Distin lipsum',
        numOfPages: 120,
      },
    ],
  },
  {
    id: 2,
    name: 'Olivier',
    age: 14,
    books: [
      {
        title: 'Distinctio',
        numOfPages: 873,
      },
      {
        title: 'Totam perspiciatis',
        numOfPages: 3057,
      },
    ],
  },
  {
    id: 3,
    name: 'Sam',
    age: 42,
    books: [
      {
        title: 'Numquam volup',
        numOfPages: 1309,
      },
      {
        title: 'Lorem ipsum',
        numOfPages: 479,
      },
      {
        title: 'Ipsum soluta',
        numOfPages: 1468,
      },
      {
        title: 'Voluptatibus',
        numOfPages: 3801,
      },
    ],
  },
])

// on aurait pu calculer le nombre d'utilisateurs en utilsant la pp computed :
// const numOfMembers=computed=(()=>{
// return users.value.length
// })

const numberOfBooks = computed(() => {
  let total = 0
  for (let i = 0; i < users.value.length; i++) {
    const booksRead = users.value[i].books.length
    total = total + booksRead
  }
  return total
})

// console.log(numberOfBooks.value)

const numberOfPages = computed(() => {
  let total = 0
  for (let i = 0; i < users.value.length; i++) {
    for (let j = 0; j < users.value[i].books.length; j++) {
      // deuxieme boucle sur le tableau de la clé books. (On aurait pu stocker users.value[i].books dans une variable pour clarifier le code)
      total = total + users.value[i].books[j].numOfPages
    }
  }
  return total
})

// console.log(numberOfPages.value)

const addUser = () => {
  users.value.push({
    id: 4,
    name: 'John',
    age: 33,
    books: [
      {
        title: 'Lorem ipsum',
        numOfPages: 352,
      },
      {
        title: 'Totam perspiciatis',
        numOfPages: 3057,
      },
    ],
  })
}
</script>
<template>
  <section>
    <p>
      Le groupe de lecture compte <span>{{ users.length }}</span> membres
    </p>
    <!--correction plus optimale pour la performance (selon la correction) : calculer le nombre d'utilisateurs avec une pp computed, pour l'affichage on aurait ecrit : {{ numOfMembers }}-->

    <p>
      A eux <span>{{ users.length }}</span
      >, ils ont lu <span>{{ numberOfBooks }}</span> livres pour un total de
      <span>{{ numberOfPages }}</span> pages.
    </p>
    <button @click="addUser">Ajouter un membre</button>
  </section>
</template>

<style scoped>
span {
  color: orange;
  font-weight: bold;
}

button {
  color: orange;
  border: 2px solid orange;
  padding: 5px 10px;
  background-color: white;
  border-radius: 3px;
}
</style>
