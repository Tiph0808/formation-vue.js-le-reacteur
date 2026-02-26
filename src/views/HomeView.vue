<script setup>
import { ref } from 'vue'
import VueCookies from 'vue-cookies'

// je crée une ref pour récupérer la valeur de mon input
const text = ref('')

// Je crée une nouvelle ref pour pouvoir enregistrer la valeur de mon cookie et ensuite l'afficher ( et que l'affichage change automatiquement)
//Je l'initialise a NULL car au depart le cookie est vide (vide ou inexistant?)
const cookieValue = ref(null)

const saveText = () => {
  //Je crée mon cookie, je lui donne la valeur de ma ref text
  VueCookies.set('text', text.value)
  console.log(text.value)
  //Je peux ensuite reinitialiser ma ref
  text.value = ''
}

const getCookie = () => {
  //Je recupere mon cookie et je stocke ça dans une variable
  const textFromCookie = VueCookies.get('text')
  console.log(textFromCookie)
  // si la variable qui recupere mon cookie a une valeur false alors j'affiche une alerte,
  if (!textFromCookie) {
    alert('There is no cookie')
    // si ma varaibale textFromCookie a une valeur truthy, alors je l'assigne a ma ref cookieValue
  } else {
    cookieValue.value = textFromCookie
  }
}

const deleteCookie = () => {
  VueCookies.remove('text')
  console.log('cookie supprimé')
  // je reinitialise  cookie value, pour que l'affichage disparaisse quand jefface le cookie
  cookieValue.value = ''
}
</script>

<template>
  <main>
    <h1>Enter a text</h1>
    <input type="text" id="text" name="text" placeholder="Type here..." v-model="text" />

    <button @click="saveText">Save text in cookie</button>
    <div>
      <button @click="getCookie">Get cookie</button>
      <button @click="deleteCookie">Delete cookie</button>
    </div>

    <p v-if="!cookieValue">No cookie saved!</p>
    <p v-else>Cookie value : {{ cookieValue }}</p>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

div > button:last-child {
  margin-left: 20px;
}
</style>
