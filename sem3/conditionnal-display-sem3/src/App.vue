<script setup>
import FirstPart from './components/FirstPart.vue'
import SecondPart from './components/SecondPart.vue'
import ThirdPart from './components/ThirdPart.vue'
import FourthPart from './components/FourthPart.vue'
</script>

<template>
  <main>
    <h1>Conditional display</h1>

    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <FourthPart />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 50px;
}
</style>
