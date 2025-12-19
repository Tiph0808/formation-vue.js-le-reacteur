<script setup>
const props = defineProps({
  infos: Object,
})

console.log(props.infos)
</script>

<template>
  <div :style="{ backgroundImage: `url(${infos.image})` }" class="container">
    <div>
      <h3>
        <span>{{ infos.category.toUpperCase() }}</span
        ><span>{{ infos.subCategory.toUpperCase() }}</span>
      </h3>
      <h1>
        <span>{{ infos.title }}</span>
      </h1>
    </div>

    <p>{{ infos.teaser }}</p>
  </div>
</template>

<style scoped>
.container {
  height: 550px;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 90px;
}

.container > div {
  /* border: 2px solid pink; */
  position: relative;
  margin-bottom: 70px;
}

.container > div::before {
  content: '';
  position: absolute;
  top: 0px;
  left: -5px;
  width: 5px;
  height: 100%;
  background-color: blueviolet;
}

h1 {
  font-family: 'Merriweather', serif;
  color: white;
  width: 750px;
  font-size: 32px;
  line-height: 46px;
  font-weight: bold;
}

h1 span {
  background-color: black;
  padding: 5px;
}

h3 {
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: white;
  background-color: black;
  display: inline;
  padding: 5px 0px;
}

h3 span:first-child {
  background: linear-gradient(45deg, #be80ff, #6325ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h3 span:last-child {
  padding: 0px 10px;
}

p {
  /* border: 2px solid pink; */
  color: white;
  font-weight: 300;
  line-height: 22px;
  width: 800px;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.525);
  padding: 25px;
}
</style>
