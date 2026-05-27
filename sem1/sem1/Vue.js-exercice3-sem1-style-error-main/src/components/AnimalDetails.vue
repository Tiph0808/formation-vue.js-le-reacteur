<script setup>
const props = defineProps({
  name: String,
  species: String,
  age: Number
})
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <p><span>Espèce</span> : {{ species }}</p>
    <p><span>Age</span> : {{ age }}</p>
  </div>
</template>

<!-- <template>
  <p>toto</p>
</template> -->
<style scoped>
div {
  /* border: 3px solid blue; */
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* justify-content: space-between; */
}
span {
  text-decoration: underline;
  color: gray;
}

/***Media Query***/
</style>
