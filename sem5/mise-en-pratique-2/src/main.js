import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// on cree une ref avec les infos initiales du profil que l'on transmettra à notre provider
const userInfos = ref({
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'environmental scientist',
})

//correction :  on declare la fonction avant le provider puis on lui transmet

const editProfile = (newUser) => {
  // correction : on verifie qu'il y a une nouvelle valeur avantde faire les modifs
  if (newUser.newFirstname) {
    userInfos.value.firstname = newUser.newFirstname
  }
  if (newUser.newLastname) {
    userInfos.value.lastname = newUser.newLastname
  }
  if (newUser.newAge) {
    userInfos.value.age = newUser.newAge
  }

  if (newUser.newJob) {
    userInfos.value.job = newUser.newJob
  }

  // console.log('user apres modif', userInfos.value)
}

//creation de mon provider
app.provide('GlobalStore', {
  // je transmet les toutes infos que je souhaite partager
  // RMQ syntaxe : les deux points ne sont pas obligatoires, on aurait pu mettre uniquement le nom de la variable ou de la fonction que l'on veut transmettre
  // ATTENTIOBN : si on utilise la syntaxe avec ":" il faut que ce qu'il y avant les : (càd le nom qui decrit ce que j'envoie) soit orthographié de LA MEME FACON que le nom des variables,fonctions, objets (etc..) transmises
  userInfos: userInfos,
  editProfile: editProfile,
})

// Je fourni sous le nom GlobalStore, un objet qui contient une propriété (ou "clé") userInfos

app.mount('#app')
