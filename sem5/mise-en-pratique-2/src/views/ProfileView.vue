<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const globalStore = inject('GlobalStore')
</script>
<template>
  <main>
    <h1>Your Profile</h1>
    <div>
      <p><span>Firstname : </span>{{ globalStore.userInfos.value.firstname }}</p>
      <p><span>Lastname : </span>{{ globalStore.userInfos.value.lastname }}</p>
      <p><span>Age :</span> {{ globalStore.userInfos.value.age }}</p>
      <p><span>Job : </span>{{ globalStore.userInfos.value.job }}</p>
    </div>

    <RouterLink :to="{ name: 'edit' }"> Edit profile </RouterLink>
  </main>
</template>

<style scoped>
main {
  padding: 50px 100px;
}

p {
  line-height: 20px;
}

span {
  font-weight: bold;
  text-decoration: underline;
}
p:last-of-type {
  margin-bottom: 40px;
}

/* pour styliser la balise RouterLink : balise a */
a {
  border: 1px solid #ffc400;
  color: #ffc400;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
