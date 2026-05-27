<script setup>
import { inject, ref } from 'vue'
// je recupere le router pour pouvoir m'en servir dans mon code car je ne peux pas mettre un RouterLink dans mon form, la redirection depend des infos transmises au clic donc la navigation doit se faire APRES la soumission des données
// Je fais ça grace à la methode .push() ---> router.push({name: 'nom de la route'}) Voir ligne 19
import { useRouter } from 'vue-router'

//Pour naviguer a linterieur de la balise script après avoir executer du code, j'utilise useRouter (je nomme const router par convention!)
const router = useRouter()

const globalStore = inject('GlobalStore')

//  je crée une ref pour mes nouvelles infos
//Bonus : pour préremplir les cases avec les valeurs de la page profile, je vais cherccher les infos dans mon provider qui me les transmet sous la clé userInfos :
const newUser = ref({
  newFirstname: globalStore.userInfos.value.firstname,
  newLastname: globalStore.userInfos.value.lastname,
  newJob: globalStore.userInfos.value.job,
  newAge: globalStore.userInfos.value.age,
})

// Je combine plusieures actions a la soumission du formulaire
const submitForm = () => {
  globalStore.editProfile(newUser.value) // je declenche ma fonction dans mon provider et je lui envoie les nouvelles infos
  router.push({ name: 'profile' }) // PUIS je suis redirigée vers la page profile
}
</script>

<template>
  <main>
    <h1>Edit Your profile</h1>

    <form @submit.prevent="submitForm">
      <label>Firstname :</label> <input type="text" id="fistname" v-model="newUser.newFirstname" />

      <label>Lastname :</label><input type="text" id="lastname" v-model="newUser.newLastname" />

      <label>Age :</label> <input type="number" id="age" v-model="newUser.newAge" />

      <label>Job :</label> <input type="text" id="job" v-model="newUser.newJob" />

      <button>Valid changes</button>
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

form {
  display: flex;
  flex-direction: column;

  align-items: center;
}
label {
  margin-bottom: 10px;
}

input {
  margin-bottom: 20px;
  width: 250px;
}
</style>
