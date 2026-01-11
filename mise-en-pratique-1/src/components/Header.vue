<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink
      :to="{
        name: 'home',
      }"
      >Go to Home Page</RouterLink
    >
    <RouterLink
      :to="{
        name: 'users',
      }"
      >Go to Users Page</RouterLink
    >
  </header>
</template>
<style scoped>
header {
  padding: 10px 30px;
}

a:first-child {
  margin-right: 20px;
}
</style>
