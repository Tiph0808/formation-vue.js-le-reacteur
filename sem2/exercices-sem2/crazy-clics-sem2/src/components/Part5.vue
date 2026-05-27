<script setup>
/* je crée un tableau qui me permet de creer autant de buttons que de valeurs dans le tab */
const converterTab = [10, 50, 100, 250, 500, 1000, 2500, 5400, 9000]

const convertToCm = (kilometers) => {
  alert(kilometers + `km correspond à ` + kilometers * 100000 + `cm`)
}
</script>

<template>
  <section>
    <h2>Convertir des km en cm :</h2>
    <div>
      <button @click="convertToCm(number)" v-for="(number, index) in converterTab" :key="index">
        {{ number }} km
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 500px;
  background-color: aquamarine;
  color: #8929e2;
  margin: 30px auto;
  border-radius: 10px;
}

h2 {
  padding: 20px;
}

div {
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

div button {
  width: 150px;
  height: 60px;
  color: #8929e2;
  font-weight: bold;
  background-color: aquamarine;
  border: 3px solid #8929e2;
}
</style>
