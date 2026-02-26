<script setup>
// import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { inject } from 'vue'
import VueCookies from 'vue-cookies'

//jinjecte mon provider pour avoir accès aux infos
const GlobalStore = inject('GlobalStore')
console.log(GlobalStore.userInfos)

// Pour effacer le profil
const deleteProfile = () => {
  // je reassigne la valeur null a ma ref userInfos grace a la fonction declarée dans mon provider
  GlobalStore.updateInfos()
  // ET NE PAS OUBLIER !! : j'efface aussi mon cookie :)
  VueCookies.remove('userInfos')
}
</script>

<template>
  <main>
    <!-- Si mes infos n'existent pas (=si aucun profil n'a été crée = si la valeur de cette vraiable est NULL) alors je doit etre redirigée vers la page create -->
    <h1 v-if="GlobalStore.userInfos.value === null">
      No profile Yet !<RouterLink :to="{ name: 'create' }"> Create it! </RouterLink>
    </h1>
    <!-- sinon je les affiche -->
    <div v-else>
      <h1>Profile</h1>
      <p>Name : {{ GlobalStore.userInfos.value.name }}</p>
      <p>Email : {{ GlobalStore.userInfos.value.email }}</p>
      <button @click="deleteProfile">Delete Profile</button>
    </div>
    <!-- RMQ : my way : si ces infos existent alors je les affiche sinon je vais vers la page create
     Je ne comprends pas trop pourquoi elle a préféré marquer si les infos =null(1) et pourquoi elle a commencé par ce cas (2)
     Explication :
     1- Parce que la question n'est pas "est ce que la valeur existe" (elle existe puisque c'est une ref dans main.js), mais plutot :"est ce qu'elle contient qq chose?"
     2- il vaut mieux commencer par isoler le cas "Particulier" et ensuite dire quoi faire qd c'est "normal"-->
  </main>
</template>

<style scoped>
main {
  padding: 50px;
}

h1 {
  text-align: center;
}
a {
  color: teal;
  font-weight: bold;
}

p {
  line-height: 30px;
}
button {
  margin-top: 20px;
}
</style>
