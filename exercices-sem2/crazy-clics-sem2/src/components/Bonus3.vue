<script setup>
const colorsList = [
  { name: 'bleu', hexa: '#0B71BA' },
  { name: 'vert', hexa: '#39B639' },
  { name: 'orange', hexa: '#EA8512' },
  { name: 'violet', hexa: '#721D7D' },
  { name: 'marron', hexa: '#713928' },
  { name: 'jaune', hexa: '#DED94B' },
  { name: 'noir', hexa: '#1C1C18' },
  { name: 'rouge', hexa: '#F11919' },
  { name: 'gris', hexa: '#9C9696' },
]

// My way :
// const randomColorBis = (tab) => {
//   alert(
//     `Vous obtenez du ${tab[Math.floor(Math.random() * tab.length)].name} dont le code hexadecimal est ${tab[Math.floor(Math.random() * tab.length)].hexa}`,
//   )
// }

// Correction (+ propre): la fonction randomColorBis n'a pas besoin d'argument :
const randomColorBis = () => {
  const randomIndex = Math.floor(Math.random() * colorsList.length)
  alert(
    ` Vous obtenez du ${colorsList[randomIndex].name} dont le code haxadecimal est ${colorsList[randomIndex].hexa}`,
  )
}
</script>

<template>
  <!-- Attention: si jutilise ma methode je dois donner l'argument (tab) a la fontction : @click = "randomColorBis(colorsList)" -->
  <section>
    <div>
      <button @click="randomColorBis(colorsList)">Couleur surprise version bis</button>
    </div>
  </section>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}

button {
  border-image: linear-gradient(to right, red, yellow, blue) 1;
  background-color: white;
  font-size: 20px;
}
</style>

<!-- correction du style : autre facon de creer une bordure.
 on change les dimensions de la div et du button de facon a ce la div depasse a peine du boutton , et on applique a la div un background dégradé avec linear gradient(effet liseré)-->
