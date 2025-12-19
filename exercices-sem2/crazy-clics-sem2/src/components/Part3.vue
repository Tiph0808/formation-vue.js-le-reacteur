<script setup>
const colors = {
  bleue: '#23b8d3',
  violette: '#a519a5',
  orange: '#ffa500',
  verte: '#44f178',
}

const displayColor = (color, code) => {
  alert(`il s'agit de la couleur ` + color + ` dont le code hexadecimal est ` + code)
}
</script>

<template>
  <section>
    <h2>De quelle couleur s'agit-il ?</h2>
    <div>
      <div
        v-for="(value, key, index) in colors"
        :key="index"
        :style="{ backgroundColor: value }"
        @click="displayColor(key, value)"
      ></div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin: 30px 0px;
}

div {
  display: flex;
  gap: 25px;
  justify-content: center;
}

div > div {
  height: 60px;
  width: 60px;
  border-radius: 30px 0px;
}
</style>
