import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import { ref } from 'vue'

const app = createApp(App)

app.use(router)

app.use(VueCookies)

// je defini ma ref userInfos, je l'initialise a null
// const userInfos = ref(null)

// POUR RENDRE MA CONNEXION PERSISTANTE (correction):
//(1ere etape dans CreateView)
// 2 eme etape :
// au rafraichissement :mon appli se recharge --> lecture de main.js puis du reste.
//  je lis ma ref userInfos;
// si un cookie a été crée avant le rafraichissement je peux le recuperer en faisant
// VueCookies.get('userCookie')
// Donc au moment ou j'initialise ma ref userInfos je lui dit de prendre soit la valeur du cookie contenant les infos soit a null
const userInfos = ref(VueCookies.get('userCookie' || null))

// MY way :
// Pour rendre la connexionpersistante: 1ere etape dans CreateView.vue
// 2eme etape lorsque je rafraichit la page ( lorsque je rafraichit cest dabord main.js qui se relance c'est donc ici dans main.js que je dois regarder si un cookie a été crée ou pas mais : comment savoir ça?
// et bien si un cookie a été crée je peux essayer de le recuperer grace a la methode .get et sa valeur.
// je stocke ca dans une variable cookie
// const cookie = VueCookies.get('userCookie')

//si cookie existe alors je change la valeur de userInfos
// if (cookie) {
//   userInfos.value = cookie
// }

// je crée une fonction pour pouvoir modifier ces infos
// si jenvoie des arguments name et email c'est que je veux enregistrer ces infos et créer mon user
// si je n'en envoi pas c'est que je veux supprimer ces infos
const updateInfos = (name, email) => {
  // si je recois ces valeurs alors je modifie les infos, ma ref userInfos sera egale a un objet avec deux clés name et email
  if (name && email) {
    userInfos.value = {
      name: name,
      email: email,
    }
  }
  //si je ne reçois pas ces 2 infos  je laisse userInfos null
  else {
    userInfos.value = null
  }
}

// j'initialise mon forunisseur de dependances dans lequel je peux stocker ma ref et ma fonction
app.provide('GlobalStore', {
  userInfos: userInfos,
  updateInfos: updateInfos,
})

app.mount('#app')
