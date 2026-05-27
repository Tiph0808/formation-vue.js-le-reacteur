import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThumbsUp, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp, faCaretUp, faCaretDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
