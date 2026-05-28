<script setup>
import axios from 'axios'
import { useRouter, RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()

const title = ref('Mon titre')
const price = ref(0)
const picture = ref(null)

const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  // je crée un formData uniquement pour ma picture
  const pictureFormData = new FormData()
  // j'ajoute a ce formData une clé files ayant pour valeur la valeur de l'image selectionnée
  pictureFormData.append('files', picture.value)
  //j'upload ma picture grâce a une requete (en envoyant 1 form-data)
  try {
    const uploadResponse = await axios.post('http://localhost:1337/api/upload', pictureFormData)
    console.log(uploadResponse)
    // on recupere l'id de notre image qui se trouve dans uploadResponse.data[0].id
    const pictureId = uploadResponse.data[0].id
    console.log('id de mon image', pictureId)
    // on refait une requête pour créer notre nouvel element contenant un titre et notre picture
    const { data } = await axios.post('http://localhost:1337/api/images', {
      data: { title: title.value, price: price.value, url: pictureId },
    })
    console.log('element ajouté a notre collection : ', data)
    isLoading.value = false
    // Je redonne a picture une valeur nulle pour ne pas qu'elle reste affichée en preview
    picture.value = null
    router.push({ name: 'home' })
  } catch (error) {
    console.log(error.message)
  }
}

// Pour afficher un preview de mon image avant de valider la requete , càd lorsqu'on selectionne le fichier
// Je crée une url  (interpretable pour une balise img) a partir des infos de l'img grâce a la pp computed :
const imagePreview = computed(() => {
  return URL.createObjectURL(picture.value)
})
console.log(imagePreview)
</script>

<template>
  <main>
    <h1>Ajoute ton image</h1>

    <form @submit.prevent="handleSubmit">
      <label for="title">Titre :</label>
      <input type="text" placeholder="title" v-model="title" />

      <label for="price">Prix : </label>
      <input type="number" id="price" name="price" v-model="price" />

      <input
        type="file"
        id="picture"
        name="picture"
        @input="
          (event) => {
            picture = event.target.files[0]
          }
        "
      />

      <div v-if="picture" class="preview">
        <img :src="imagePreview" />
      </div>

      <p v-if="isLoading">Loading...</p>
      <button>Valider</button>

      <button class="link">
        <RouterLink :to="{ name: 'home' }">Retour à l'acceuil</RouterLink>
      </button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 20px;
  align-items: flex-start;
}

.preview > img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.link {
  margin-top: 50px;
}
</style>
