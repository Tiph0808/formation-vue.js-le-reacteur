<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref, onBeforeMount } from 'vue'
import axios from 'axios'

// J'importe Stripe
import { loadStripe } from '@stripe/stripe-js'

// je lance la creation de l'instance stripe
const stripePromise = loadStripe(
  'pk_test_51TKbLGHHvJ79sOwaBskX192gbiHvUhngydcxviOhrpWm93fnI7Nl5JUGfdO5a1kgyzmsPfJumDXkjiAQxN8wunHx00oSD8AFjK',
)

// Je cree une ref qui stockera l'element card
const cardElement = ref(null)

// je crée mes ref pour l'affichage conditionnel de ma div card element et du bouton payer
const confirmedPayment = ref(false)

// une autre pour le paiement
const paymentLoading = ref(false)

// je defini la props id que je recois en params :
const props = defineProps({
  id: {
    type: String,
  },
})
console.log(props)

// Je crée une valeur reactive pour recevoir les infos de l'image dont l'id à été envoyée en params
const imageInfos = ref(null)

/// Je charge les infos de mon image au montage du composant
onMounted(async () => {
  try {
    const { data } = await axios.get(`http://localhost:1337/api/images/${props.id}`)
    console.log(data)
    imageInfos.value = data.data
  } catch (error) {
    console.log(error)
  }
})

// Affichage de l'element card :
onBeforeMount(async () => {
  // je recupere mon instance avant le montage du composant
  const stripe = await stripePromise
  // je recupere mon gestionnaire d'elements stripe qui va me permettre de créer l'element card
  const elements = stripe.elements()
  // Creation de l'element card que je stocke dans la ref cardElement
  cardElement.value = elements.create('card') /// cardElement vaut maintenant un objet stripe (le formulaire de carte)
  // je monte l'element car dans la div prevue a cet effet :
  cardElement.value.mount('#card-element')
})

// Déclenchement du paiement :
// declenchement de la fonction handlePayment au click sur le bouton
// j'envoie mes infos a stripe, je recupere un token et je l'envoie avec les autres infos de la transaction (titre et prix) via une requete au back

const handlePayment = async () => {
  paymentLoading.value = true
  // jai encore besoin de recuperer mon instance stripe pour interroger leur serveur et veerifier les numeros de carte.
  const stripe = await stripePromise
  // si il est valide stripe renvoie un token ( que nous enverrons a notre back end via une requete)
  // Je dois "GENERER" ce token (j'envoi en argument la valeur de ma ref cardElement, cad les valeurs saisies dans le formulaire de la carte) :
  const { token } = await stripe.createToken(cardElement.value) // La methode create token renvoie un objet qui a une clé token qui elle meme contient une clé id, c'est l'info dont jai besoin pour faire ma requete au back
  // Je stocke cette clé id de mon token dans une variable
  const stripeToken = token.id
  // J'envoie les infos de ma transaction au back : mon token, et pour cet exercice le titre et le prix
  const { data } = await axios.post('http://localhost:1337/api/images/buy', {
    token: stripeToken,
    amount: imageInfos.value.price,
    title: imageInfos.value.title,
  }) // requete a ma route buy crée dans mon backend
  console.log(data)
  // La repponse contient une clé data qui contient une clé status, si la transaction est validé la valeur de cette clé status sera "SUCCEDED" , jutilise cette valeur pour mon affichage conditionnnel
  // Si la status de la reponse est succeded alors je veux faire disparaitre l'élément card et le bouton 'payer' pour afficher un message de reussite a mon utilisateur
  if (data.status === 'succeeded') {
    confirmedPayment.value = true
  }
  paymentLoading.value = false
}
</script>

<template>
  <main>
    <h1>Achat d'une Photo</h1>
    <p v-if="!imageInfos">Chargement en cours...</p>
    <p v-else>Vous achetez une photo "{{ imageInfos.title }}" à {{ imageInfos.price }}€</p>

    <p v-if="confirmedPayment">Transaction realisée avec succès!</p>

    <div v-else>
      <div id="card-element"></div>

      <button @click="handlePayment">Payer</button>
      <p v-if="paymentLoading">Autorisation en cours...</p>
    </div>

    <button>
      <RouterLink :to="{ name: 'home' }">Retour à l'acceuil</RouterLink>
    </button>
  </main>
</template>

<style scoped>
/* Pour appliquer du style sur une div remplie par Stripe il faut lui donner une largeur */
#card-element {
  width: 300px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
/* si je n'avais pas mis de largeur a ma div elle aurait disparu avec l'ajout de align-items */
</style>
