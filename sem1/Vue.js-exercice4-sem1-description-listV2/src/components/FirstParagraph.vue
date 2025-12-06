<script setup>
const props = defineProps({
  gender: String,

  age: Number,
  job: String,
})
</script>

<template>
  <p>{{ gender === 'female' ? 'She' : 'He' }} is a {{ age }}-year-old {{ job.toLowerCase() }}.</p>
</template>
