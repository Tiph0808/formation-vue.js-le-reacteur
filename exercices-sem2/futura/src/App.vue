<script setup>
import Header from './components/Header.vue'
import FrontPage from './components/FrontPage.vue'
import ArticleCard from './components/ArticleCard.vue'
import Footer from './components/Footer.vue'
import data from './assets/articles.json'
console.log(data.frontPage)
</script>

<template>
  <Header />
  <main>
    <FrontPage :infos="data.frontPage" />

    <!--  on cree une div contenant toutes les cartes, autant de card que d'articles ds le tableau data.articlesList -->
    <div class="container articles-list">
      <ArticleCard
        v-for="articleInfos in data.articlesList"
        :key="articleInfos.id"
        :articleInfos="articleInfos"
      />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
main {
  padding: 50px 0;
}

.articles-list {
  /* border: 1px solid red; */
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
