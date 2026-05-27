<script setup>
const usersList = [
  {
    id: 23,
    gender: 'female',
    firstname: 'Emily',
    lastname: 'Parker',
    age: 24,
    account: {
      premium: true,
      avatar: {
        url: 'https://res.cloudinary.com/lereacteur-apollo/image/upload/v1706536025/RNCP31114/cours-vue/exos-sem-3/conditionnal-display-emily_py1pu1.jpg',
      },
    },
  },
  {
    id: 54,
    gender: 'male',
    firstname: 'Marcus',
    lastname: 'Bennett',
    age: 38,
    account: {
      premium: false,
    },
  },
]
</script>
<template>
  <div class="fourth-part">
    <div class="user-card" v-for="user in usersList" :key="user.id">
      <img v-if="user.account.avatar" :src="user.account.avatar.url" alt="" />
      <font-awesome-icon :icon="['fas', 'user']" v-if="!user.account.avatar" />

      <div class="user-infos">
        <p>{{ user.firstname }}</p>
        <p>{{ user.lastname }}</p>
        <p>{{ user.age }} ans</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100%;
  width: 40%;
  object-fit: cover;
  border-radius: 8px;
}

.user-card {
  border: 1px solid black;
  height: 150px;
  width: 250px;
  padding: 10px;
  display: flex;
  gap: 5px;
  border-radius: 8px;
}

.fourth-part {
  display: flex;
  gap: 20px;
}

svg {
  height: 100%;
  font-size: 80px;
}

.user-infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

/* div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.user-card {
  border: solid 1px black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100px;
  width: 200px;
  padding: 8px;
  border-radius: 8px;
}

.user-card img {
  height: 100%;
  width: 40%;
  object-fit: cover;
  border-radius: 10px;
}

.user-card svg {
  height: 100%;
  width: 40%;
}

.user-infos {
  display: flex;
  flex-direction: column;
  gap: 10px;
} */
</style>
