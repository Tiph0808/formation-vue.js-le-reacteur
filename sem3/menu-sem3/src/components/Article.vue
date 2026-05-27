<script setup>
const props = defineProps({
  selection: Object,
  average: Number,
})
</script>

<template>
  <section>
    <!-- class="content-card" -->
    <h2>{{ selection.title }}</h2>
    <!-- la methode split retourne un tableau (transform une cdc en tab et la coupe au niveau du separateur indiqué entre ()), on boucle dessus pour creer nos paragraphes (a chaque '/n' -> RETURN)  -->
    <p v-for="paragraph in selection.content.split('\n')" class="paragraph">{{ paragraph }}</p>

    <p class="author" v-if="selection.author">{{ selection.author.name }}</p>
    <div class="rates">
      <font-awesome-icon :icon="['fas', 'thumbs-up']" />
      <span>{{ average }}</span>
    </div>
  </section>
</template>

<style scoped>
.paragraph {
  margin-bottom: 5px;
}
</style>

<!-- style My way : j'ai cree un fichier style.css contenant les styles communs aux deux composants Article et Book -->

<!-- Rmq : Dans la correction, tout est dans le main.css -->

<!-- <style scoped>
@import '../assets/style.css';
</style> -->
