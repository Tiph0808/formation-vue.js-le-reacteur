<script setup>
//Import des differents composants
import Part1 from './components/Part1.vue'
import Part2 from './components/Part2.vue'
import Part3 from './components/Part3.vue'

// au clic sur l'un des boutons dans les composants enfants, l'utilisateur ne doit pas avoir besoin de rafraichir son navigateur pour voir le resultat, on a donc besoin que ce resultat soit une valeur reactive
// au click dans le composant enfant, un event sera emis le composant parent l'ecoutera et modifiera cett valeur reactive

//  j'importe ref :
import { ref } from 'vue'

// Je crée ma valeur reactive RESULT

const result = ref('') // on initialise avec une str vide

// PARTIE 1

//Declaration de la fonction declenchée a l'écoute de l'evenement 'correctTheWord'
const handleWordCorrection = (word) => {
 // my way :
  // result.value = word[0].toUpperCase() + word.slice(1).toLowerCase()

 // correction :
const firstLetter =word[0].toUpperCase()
const otherLetters = word.slice(1).toLowerCase()
result.value= firstLetter + otherLetters

}
// Autre méthode, avec une boucle :) (pour le fun!) :
// const handleWordCorrection = (word) => {
//   let correctedWord = ''
//   for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//       correctedWord = correctedWord + word[i].toUpperCase()
//     } else {
//       correctedWord = correctedWord + word[i].toLowerCase()
//     }
//   }
//   result.value = correctedWord
// }

// PARTIE 2
// import des donnees necessaires du fichier data.js
import { colorsList } from './utils/data.js'
// console.log(colorsList)

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorsList.length) // ICI Math.random mulitiplié par la longueur du tableau renvoie un nombre aleatoire entre 0 et 1 mulitiplié par 11 (ex: 2,2566 ; 10,648 etc... 11 exclu!), Mat.floor arrondi ce nombre a l'entier naturel inferieur (2,2566 => 2), on obtiendra donc un nb entier entre 0 et 10
  result.value = colorsList[randomIndex]
}

// PARTIE 3

const convertNumberToCm = (number) => {
  result.value = ` ${number} km = ${number * 100000} cm`
}
</script>

<template>
  <main>
    <h1>Crazy clics v2</h1>
    <section>
      
        <div >
          <Part1 @correctTheWord="handleWordCorrection" />
        
          <Part2 @getRandomColor="getRandomColor" />
       
          <Part3 @convertToCm="convertNumberToCm" />
        </div>
      
      <div >
        <h2><span>&#128071</span>Le résultat <span>&#128071</span></h2>
         
        <p>{{ result }}</p>
      </div>
    </section>
   
  </main>
</template>

<style scoped>

main {
  padding: 30px;
  /* background-color: pink; */
  height: 100vh;
  display:flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom:50px
  }


h2 {
  font-size: 22px;
  font-weight: bold;
}  

section{
  display: flex;
  flex:1
}

section > div {
  /* border:1px coral solid; */
  display: flex;
  flex-direction: column;
}

section>div:first-child{
  flex:1;
  justify-content: space-around;
  align-items: center;
}

section > div:last-child {
width: 200px;
align-items: center;
justify-content: center;
}

p {
  border: 2px solid black;
  height: 40px;
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;}

</style>


<!--style  my way (class left-side appliquée a la premiere div , result a la deuxieme): -->

<!--/* h2 {
  font-size: 20px;
  font-weight: bold;
}

section{
  /* border: 1px solid pink; */
  display: flex;
  justify-content: center;
  gap: 100px;
}

.left-side{
  border:1px solid royalblue;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.left-side >div {
  border: 1px solid red;
  display: flex;
  gap: 40px;
  justify-content: space-around;
  align-items: center;
  
}

.result{
  border: 1px solid greenyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.result div {
  border: 4px solid grey;
  width: 250px;
  height:40px
}

.result p {
  text-align: center;
  padding: 15px 0px;
  font-size: 12px;
  
} */ -->


