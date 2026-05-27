<template>
  <main>
    <section>
      <button v-on:click="console.log('Hello world !')">Affiche un message dans la console</button>

      <button @click="console.log('Bienvenue au Reacteur !')">
        Affiche un autre message dans la console
      </button>
    </section>
  </main>
</template>

<style scoped>
/*----- Partie 1 ----*/
section {
  display: flex;
  gap: 50px;
  justify-content: center;
}

button {
  background-color: white;
  padding: 10px;
  color: orange;
  border: 1px solid orange;
  border-radius: 10px;
}
</style>
