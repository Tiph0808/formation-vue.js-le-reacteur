<script setup>
const icones = [
  ['fab', 'github'],
  ['fab', 'linkedin'],
  ['fab', 'instagram'],
]

const displayNetwork = (brandName) => {
  alert(`il s'agit du reseau ` + brandName)
}

/* RMQ : si on veut mettre la premiere lettre en maj: on remplace brandName par:
brandName.charAt(0).toUpperCase() + brandName.slice(1) */
</script>

<template>
  <section>
    <div v-for="(logo, index) in icones" :key="index">
      <font-awesome-icon :icon="logo" @click="displayNetwork(logo[1])" />
      <!-- car on veut juste le nom du network -->
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  gap: 30px;
  justify-content: center;
}

div svg {
  font-size: 35px;
}
</style>
