<script setup></script>

<template>
  <header>
    <p>FUTURA</p>

    <nav>
      <p>SCIENCES <font-awesome-icon :icon="['fas', 'chevron-down']" /></p>

      <p>SANTE <font-awesome-icon :icon="['fas', 'chevron-down']" /></p>
      <p>TECH <font-awesome-icon :icon="['fas', 'chevron-down']" /></p>
      <p>MAISON <font-awesome-icon :icon="['fas', 'chevron-down']" /></p>
      <p>PLANETE <font-awesome-icon :icon="['fas', 'chevron-down']" /></p>
    </nav>

    <button>JE M'ABONNE</button>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(45deg, #be80ff, #6325ff);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 10px;
}

header > p {
  font-size: 40px;
  font-weight: bold;
  color: white;
}

header > nav {
  display: flex;
  gap: 20px;
}

header > nav > p {
  color: white;
}

button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 15px;
}
</style>
