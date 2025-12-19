<script setup>
const word1 = 'aLigaTOR'
const word2 = 'CHAMOIS'
const word3 = 'ElEpHaNt'
const word4 = 'wombaT'

// My way :
// const correctTheWord = (word) => {
//   const str = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//   alert(str)
// }

// Correction en utilisant une boucle ;) :
// on crée une variable str vide dans laquelle on va "créer" notre CDC en bouclant sur le mot donné en argument
const correctTheWord = (word) => {
  let str = ''
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      str = str + word[i].toUpperCase()
    } else {
      str = str + word[i].toLowerCase()
    }
  }
  alert(str)
}
</script>

<template>
  <section>
    <button @click="correctTheWord(word1)">{{ word1 }}</button>
    <button @click="correctTheWord(word2)">{{ word2 }}</button>
    <button @click="correctTheWord(word3)">{{ word3 }}</button>
    <button @click="correctTheWord(word4)">{{ word4 }}</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  gap: 80px;
}

button {
  border: none;
  background-color: aquamarine;
  padding: 15px;
  font-weight: bold;
  border-radius: 10px;
}
</style>
