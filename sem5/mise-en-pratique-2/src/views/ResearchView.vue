<!-- My way :
 <script setup>
import { personsList } from '@/assets/data'
import { ref } from 'vue'

//Je crée une ref pour l'input
const firstname = ref('')

// Je crée une ref qui dira si oui ou non le nom match avec un des users du tableau
const nameIsMatching = ref(false)

//Je crée une ref pour l'utilisateur qui matchera avec le firstname, je l'initialise a null
const personMatching = ref(null)

const searching = ref(false)

const handleSubmit = () => {
  // jai lancé la recherche :
  searching.value = true
  // je pars du principe que je ne vais rien trouver (de cette facon on "efface" les infos enregistrées au clic précédent)
  nameIsMatching.value = false
  personMatching.value = null
  // Je parcours mon tableau avec une boucle
  for (let i = 0; i < personsList.length; i++) {
    // console.log(personsList[i])
    // A chaque tour j'obtiens un objet qui represente un utilisateur
    // si le firstname du personsList[i] match avec le mame de l'input, alors j'assigne cet objet entier (=personsList[i] !) comme valeur a personMatching
    if (personsList[i].firstname === firstname.value) {
      nameIsMatching.value = true
      personMatching.value = personsList[i]
      console.log(personMatching.value)
    }
  }
}
</script> -->

<!-- // Correction : Avec La methode FIND-->

<!-- My way :
<template>
  <main>
    <div>
      <h1>Research by name</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" id="firstname" name="firstname" v-model="firstname" />
        <button>Search</button>
      </form>
    </div>

    <div>
      <p v-if="!searching">Enter a firstname</p>
      <div v-else>
        <div v-if="nameIsMatching">
          <p>{{ personMatching.firstname }}</p>
          <p>{{ personMatching.lastname }}</p>
          <p>{{ personMatching.age }}</p>
          <p>{{ personMatching.job }}</p>
        </div>
        <p v-else>sorry</p>
      </div>
    </div>
  </main>
</template> -->

<!-- Correction : -->

<script setup>
import { personsList } from '@/assets/data'
import { ref } from 'vue'

const firstname = ref('')
// console.log(personsList)

const result = ref(null)
// result est dabord null car on a rien tapé, ensuite deux possibilités (une fois qu'on a tapé) : match (le result sera un objet contenant les infos de la person qui match) or no match ( result sera undefined)

const handleSubmit = () => {
  // la methode find boucle SUR TOUS LES ELEMENTS d'un tableau --> elle donne donc accès a chaque element du tableau , un element = un objet = une personne = person
  // on veut retourner l'element du tableau si il repond a une condition : est ce que le firstname de la person correspond à celui saisi dans l'input?
  // on stocke cette valeur de retour dans une variable
  const personFound = personsList.find((person) => {
    return (
      firstname.value.toLowerCase() === person.firstname.toLowerCase() ||
      firstname.value.toLowerCase() === person.lastname.toLowerCase()
    )
  })
  console.log(personFound)
  result.value = personFound //personFound sera soit un obj soit undefined
}
</script>

<template>
  <main>
    <div>
      <h1>Research by name</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" name="firstname" v-model="firstname" />
        <button>Search</button>
      </form>
    </div>
    <div>
      <p v-if="result === null">Enter a first name</p>
      <p v-else-if="result === undefined">This name doesn't exist</p>
      <div v-else class="result">
        <p>{{ result.firstname }} {{ result.lastname }}</p>
        <p>{{ result.age }}</p>
        <p>{{ result.job }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: calc(100vh - 60px);
}

main > div {
  /* border: 1px solid red; */
  flex: 1; /* pour qu'ils se partagent l'espace equitablement */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 20px;
}

.result {
  border: 1px solid black;
  padding: 15px;
  border-radius: 20px;
}

.result p {
  line-height: 20px;
  text-align: center;
}
</style>
