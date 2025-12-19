<script setup>
const displayName = () => {
  console.log(`je m'appelle Toto`)
}

const displayName2 = (name) => {
  alert(`Je m'appelle ${name}`)
}
</script>

<template>
  <section>
    <button @click="displayName">Comment t'appelles-tu ?</button>
    <button @click="displayName2('Tiph')">Comment t'appelles-tu ?</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
}

button {
  background: linear-gradient(45deg, #92dada, #7878df);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 30px;
}
</style>
