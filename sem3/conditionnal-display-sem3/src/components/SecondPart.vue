<script setup>
import { ref } from 'vue'
const liked = ref(true)
</script>
<template>
  <div>
    <font-awesome-icon :icon="['fas', 'thumbs-up']" v-show="liked" @click="liked = false" />
    <font-awesome-icon :icon="['fas', 'thumbs-down']" v-show="!liked" @click="liked = true" />

    <!-- RMQ : Ici on utilise v-show car on est succeptible de cliquer très souvent sur cet icone . 
     Rappel du cours : "v-show est à privilegier sur des elements frequemment masqués/affichés (l'élément restera dans le DOM)" -->
  </div>
</template>
<style scoped>
svg {
  font-size: 30px;
  margin-bottom: 50px;
  cursor: pointer;
}

svg:first-child {
  color: green;
}
svg:last-child {
  color: red;
}

/* div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
}

svg {
  font-size: 30px;
}

div > svg:first-child {
  color: green;
}

div > svg:last-child {
  color: red;
} */
</style>
