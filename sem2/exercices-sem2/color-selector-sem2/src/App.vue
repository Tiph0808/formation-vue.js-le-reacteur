<script setup>
import colorsList from './assets/colorsList.json'
import { ref } from 'vue'

const selectedColor = ref(colorsList[0][0])

const selectColor = (color) => {
  selectedColor.value = color
}

// pour copier un element dans le presse papier, on utilise la  fonctionalité navigator.clipboard.write('text a copier')
// !! : cette fonctionalité toute faite est mise a dispo par le navigateur
// la fonction copyToClioboard dont l'action est de copier le text peut prendre du temps, donc c'est une fonction asynchrone: il vaut mieux attendre le resultat avant de continuer, on utilise async/await)

const copyToClipboard = async (selectedColor) => {
  try {
    await navigator.clipboard.writeText(selectedColor)
    alert('copied!')
  } catch (error) {
    alert('not copied')
  }
}
// rmq : on met un try catch pour eviter que tout le code ne plante si pour une raison pour une raison independante de notre code, l action dans le catch echoue! important! safe!

// principe general :

// 1-clic =>  declenche fonction
// 2-async = " car le code a executer (ici copier le texte) peut mettre du temps"
// 3-try =>  "essaye la copie"
// 4-await = "attends  a fin de l'execution du code"
// 5-succés => averti l'utilisateur
// 6-catch => gere l'erreur si la copie a echouée
</script>

<template>
  <main>
    <h1>Selectionnez une couleur</h1>

    <div>
      <section>
        <div v-for="subColorsList in colorsList" :key="subColorsList[0]">
          <div
            v-for="color in subColorsList"
            :key="color"
            :style="{ backgroundColor: color }"
            @click="selectColor(color)"
            :class="{ selected: color === selectedColor }"
          ></div>
        </div>
      </section>
      <section>
        <p @click="copyToClipboard(selectedColor)">{{ selectedColor }}</p>
        <div class="color-display"></div>
      </section>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin: 20px 0px 50px 0px;
}

main > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

section:first-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

section:last-child p {
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
}

section > div {
  display: flex;
  gap: 5px;
}

section > div > div {
  height: 30px;
  width: 30px;
}

.color-display {
  height: 130px;
  width: 130px;

  background-color: v-bind(selectedColor);
}

.selected {
  box-shadow: 0px 0px 5px #555;
}
</style>
