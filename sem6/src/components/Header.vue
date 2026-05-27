<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { inject } from 'vue'

const GlobalStore = inject('GlobalStore')
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }"> Acceuil </RouterLink>
      <RouterLink :to="{ name: 'create' }">Create</RouterLink>
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
    </nav>

    <p v-if="GlobalStore.userInfos.value">{{ GlobalStore.userInfos.value.name }}</p>
  </header>
</template>

<style scoped>
header {
  /* border: 1px solid red; */
  height: 60px;
  border-bottom: 2px solid teal;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

nav {
  /* border: 1px solid green; */
  display: flex;
  gap: 20px;
}

.router-link-exact-active {
  color: goldenrod;
}
</style>
