<script setup>
const props = defineProps({
  firstname: String,
  lastname: String,
  gender: String,
})
</script>

<template>
  <h2 v-bind:class="{ orangeText: gender === 'female' }">{{ firstname }} {{ lastname }}</h2>

  <!-- ceci marche aussi:
   <h2 :style="{ color: gender === 'female' ? 'orange' : 'black' }">
    {{ firstname }} {{ lastname }}
  </h2> -->
</template>

<style scoped>
.orangeText {
  color: orange;
}
</style>
