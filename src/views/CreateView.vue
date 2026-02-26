<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import VueCookies from 'vue-cookies'

const name = ref('toto')
const email = ref('toto@mail.com')
const errorMessage = ref('')

const GlobalStore = inject('GlobalStore')
console.log(GlobalStore)

const router = useRouter()

const handleForm = () => {
  //je commence par faire un console.log des infos que je veux enregistrer
  // je vais enregistrer ces infos dans un fournisseur de dependance pour qu'elles soient dispo dans toute l'appli ( = ref userInfos, fichier main.js)
  console.log(name.value, email.value)
  //pour enregistrer ces infos j'appelle la fonction que jai definie dans mon fournisseur de dep et je lui donne les infos des champs en argument
  GlobalStore.updateInfos(name.value, email.value)

  // Pour rendre la connexion persistante =
  // 1ère étape =  jenregistre aussi ces mêmes infos dans un cookie que je crée :
  // Mon cookie a pour nom userInfos puisque c'est ce qu'il contient
  // ATTENTION !!le cookie userInfos est different de la ref userInfos!! ;)
  VueCookies.set('userInfos', GlobalStore.userInfos.value)
  // RMQ: si les infos existent elle sont enregistrées dans mon main.js, pour y acceder : GlobalStore.userINfos.value :)
  // 2eme etape, je dois reinitialiser ma ref userInfos pour que la connexion soit persistante meme lorsque je rafraichit la page ( lorsuqe je rafraichit main.js se relance c'est donc dan smain.js que je dois regarder si un cookie a été crée ou pas)

  // une fois que mes infos sont enregistrer je peux etre direigé verds la page Profile
  router.push({ name: 'profile' })
}
</script>

<template>
  <main>
    <h1>Create your profile</h1>

    <form @submit.prevent="handleForm">
      <label for="name">Name : </label>
      <input type="text" name="name" id="name" v-model="name" @input="errorMessage = ''" />

      <label for="email">Email : </label>
      <input type="email" name="email" id="email" v-model="email" @input="errorMessage = ''" />

      <button>Save Informations</button>

      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 60px);
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
</style>
