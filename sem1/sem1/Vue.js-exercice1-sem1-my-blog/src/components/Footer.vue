<template>
  <footer>
    <p>
      Made with <a href="https://react.dev/" target="_blank">React</a> by
      <a href="https://www.lereacteur.io/" target="_blank">Le Reacteur</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  /* border: 2px solid green; */
  height: var(--footer-height);
  border-top: 2px solid var(--yellow);
}

p {
  text-align: center;
  padding: 20px;
}

a {
  text-decoration: none;
  color: var(--yellow);
}
</style>
