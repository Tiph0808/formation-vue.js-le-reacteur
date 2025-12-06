<template>
  <header>
    <div class="container">
      <img src="../assets/img/my-blog-avatar_xhjc4e.png" alt="" />
      <h2>My blog</h2>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 2px solid var(--yellow);
  height: var(--header-height);
  padding: 10px 0px;
}

.container {
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  height: 100%;
}
</style>
