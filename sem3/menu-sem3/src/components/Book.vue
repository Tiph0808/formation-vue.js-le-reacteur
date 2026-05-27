<script setup>
const props = defineProps({
  selection: Object,
  average: Number,
})

import { ref } from 'vue'

// My way :

// const shortStyle = ref(true)

// const changeStyle = () => {
//   shortStyle.value = !shortStyle.value
// }

//correction :

const displayFullSynopsis = ref(false)
</script>

<template>
  <section>
    <!--class="content-card"> -->
    <h2>{{ selection.title }}</h2>

    <!-- correction : -->
    <div
      class="synopsis"
      :class="{
        displayText: displayFullSynopsis, // if truthy
      }"
    >
      <p v-for="paragraph in selection.synopsis.split('\n')" class="paragraph">{{ paragraph }}</p>
    </div>

    <font-awesome-icon
      :icon="['fas', 'caret-up']"
      class="caret"
      v-if="displayFullSynopsis"
      @click="displayFullSynopsis = !displayFullSynopsis"
    />
    <font-awesome-icon
      :icon="['fas', 'caret-down']"
      class="caret"
      v-else
      @click="displayFullSynopsis = !displayFullSynopsis"
    />

    <!-- My way :
    <div v-if="shortStyle" class="text">
      <p v-for="paragraph in selection.synopsis.split('\n')">{{ paragraph }}</p>
      <button @click="changeStyle"><font-awesome-icon :icon="['fas', 'caret-down']" /></button>
    </div>
    
    <div v-else class="other-text">  
      <p v-for="paragraph in selection.synopsis.split('\n')">{{ paragraph }}</p>
      <button @click="changeStyle"><font-awesome-icon :icon="['fas', 'caret-up']" /></button>
    </div> -->

    <div class="author">
      <p v-if="selection.author">{{ selection.author }}</p>
    </div>
    <div class="rates" v-if="selection.rates.length > 0">
      <font-awesome-icon :icon="['fas', 'thumbs-up']" />
      <span>{{ average }}</span>
    </div>
    <p class="rates" v-else>Pas encore de like</p>
    <div class="small-book" v-if="selection.numberOfPage < 250">
      <p>Petit</p>
      <p>Livre</p>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
}

.small-book {
  position: absolute;
  top: -25px;
  right: -25px;
  background-color: var(--yellow);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.paragraph {
  margin-bottom: 5px;
  letter-spacing: 0.2px;
  line-height: 20px;
}

.synopsis {
  height: 100px;
  overflow: hidden;
}

.caret {
  align-self: flex-end;
}

.displayText {
  height: fit-content;
}
</style>

<!-- style My way : j'ai cree un fichier style.css contenant les styles communs aux deux composants Article et Book -->

<!-- Rmq : Dans la correction, tout est dans le main.css -->

<!-- <style scoped>
@import '../assets/style.css';

.text {
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  height: 100px;
  overflow: hidden;
}

.otherText {
  position: relative;
}

button {
  position: absolute;
  bottom: -5px;
  right: 0px;
  border: none;
  background-color: #fedd95;
}

.small-book {
  position: absolute;
  top: -20px;
  right: -15px;
  background-color: #f6ab09;
  padding: 15px;
  color: white;
  font-size: 14px;
  border-radius: 50%;
}
</style> -->
