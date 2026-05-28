<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref, inject } from 'vue'
import axios from 'axios'

const GlobalStore = inject('GlobalStore')

const imagesList = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:1337/api/images?populate=*')
    console.log('data :', data.data)
    imagesList.value = data.data
  } catch (error) {
    console.log(error.message)
  }
  isLoading.value = false
})
</script>

<template>
  <main>
    <h1>Listes d'images</h1>
    <p v-if="isLoading">Chargement en cours...</p>

    <!-- Affichage des images -->
    <div v-else class="picturesBloc">
      <div v-for="image in imagesList" :key="image.id">
        <img :src="image.url.url" />
        <p class="imageTitle">{{ image.title }}</p>
        <p>{{ image.price }} €</p>

        <button>
          <!-- J'envoie le documentId comme info en params pour recevoir les infos de l'image sur laquelle je clique dans PaymentView -->
          <RouterLink :to="{ name: 'payment', params: { id: image.documentId } }"
            >Acheter</RouterLink
          >
        </button>
      </div>
    </div>

    <div class="buttonBloc">
      <!-- <button v-if="GlobalStore.userToken.value">
         <RouterLink :to="{ name: 'create' }">Ajouter une image</RouterLink>
      </button> -->
      <button>
        <RouterLink :to="{ name: 'create' }">Ajouter une image</RouterLink>
      </button>
      <div>
        <button @click="GlobalStore.changeToken('hfgergfqjbfjab')">Ajouter un Token</button>
        <button @click="GlobalStore.changeToken('')">Retirer le Token</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.picturesBloc {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.picturesBloc img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.imageTitle {
  margin-top: 15px;
  font-size: 20px;
}
.buttonBloc {
  /* border: 1px solid red; */
  display: flex;
  gap: 300px;
}
.buttonBloc > div {
  display: flex;
  gap: 20px;
}
</style>
