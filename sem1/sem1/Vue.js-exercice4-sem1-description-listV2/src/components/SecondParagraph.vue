<script setup>
const props = defineProps({
  firstname: String,
  hobbyOne: String,
  hobbyTwo: String,
})
</script>

<template>
  <p>Outside of work, {{ firstname }} likes to {{ hobbyOne }} and {{ hobbyTwo }}.</p>
</template>
