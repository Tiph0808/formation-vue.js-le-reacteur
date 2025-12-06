import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import de la librairy fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'
// Import du composant vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import de icones
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// Ajout des icones a la librairy
library.add(faHeart)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
//.component('font-awesome-icon', FontAwesomeIcon) : previent l'instance Vue qu'elle va utiliser le composant font-awesome
