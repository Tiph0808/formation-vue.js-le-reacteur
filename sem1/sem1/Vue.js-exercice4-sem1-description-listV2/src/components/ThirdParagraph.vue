<script setup>
const props = defineProps({
  gender: String,
  petName: Number,
  petAge: String,
  petSpecies: String,
})
</script>

<template>
  <p>
    At home, {{ gender === 'female' ? 'her' : 'his' }} lively companion is {{ petName }} a
    {{ petAge }}-year-old {{ petSpecies }}.
  </p>
</template>
