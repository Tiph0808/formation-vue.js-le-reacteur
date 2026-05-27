<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'research' }">Research</RouterLink>
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
      <RouterLink :to="{ name: 'edit' }">Edit</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  border-bottom: 2px solid #ffc400;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  display: flex;
  gap: 20px;
}
</style>
