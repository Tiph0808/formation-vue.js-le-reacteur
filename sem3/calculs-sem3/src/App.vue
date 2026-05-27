<script setup>
import Part1 from './components/Part1.vue'
import Part2 from './components/Part2.vue'
import Part3 from './components/Part3.vue'
</script>

<template>
  <main>
    <h1>A vos calculs !</h1>

    <Part1 />

    <Part2 />

    <Part3 />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 50px;
}

h1 {
  font-size: 30px;
  font-weight: bold;
}
</style>
