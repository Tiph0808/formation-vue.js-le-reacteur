<script setup>
const props = defineProps({
  articleInfos: Object,
})

const categoriesColors = {
  exploration: ['#be80ff', '#6325ff'],
  astronomie: ['#ff6b9f', '#ff4e52'],
  technologie: ['#9fcb5c', '#069849'],
  physique: ['#fa9761', '#ff5957'],
}
</script>

<template>
  <div>
    <img :src="articleInfos.image" alt="" />
    <p>
      <span>{{ articleInfos.category.toUpperCase() }}</span>
      <span>{{ articleInfos.subCategory.toUpperCase() }}</span>
    </p>

    <h2>{{ articleInfos.title }}</h2>

    <p class="date">{{ articleInfos.date }}</p>
  </div>
</template>

<style scoped>
div {
  /* border: 1px solid green; */
  width: calc((100% - 90px) / 4);
  height: 480px;
}
img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
}

span {
  font-size: 12px;
}

span:first-child {
  background: linear-gradient(45deg, v-bind('categoriesColors[articleInfos.category]'));

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  letter-spacing: 0.7px;
}

span:last-child {
  letter-spacing: 0.3px;
  font-weight: 300;
  padding-left: 10px;
}

h2 {
  margin: 10px 0;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  line-height: 20px;
}

.date {
  font-size: 12px;
  color: grey;
}
</style>
