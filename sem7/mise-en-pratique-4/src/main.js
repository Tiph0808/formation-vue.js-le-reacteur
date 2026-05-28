import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)

app.use(VueCookies)

// creation du fournsseur de dependance

const userToken = ref(VueCookies.get('cookie' || '')) // (On cherche s il y a un cookie enregistré au montage de l'appli )
const changeToken = (token) => {
  userToken.value = token
  if (userToken.value) {
    // Pour rendre ma connexion persistante :) =
    // quand mon token est crée --> je crée un cookie , je lui donne la valeur de mon token
    VueCookies.set('cookie', userToken.value)
    alert('token crée')
  } else {
    // qd on efface le token on efface le cookie
    VueCookies.remove('cookie')
    alert('token retiré')
  }
}

app.provide('GlobalStore', {
  userToken: userToken,
  changeToken: changeToken,
})

app.mount('#app')
