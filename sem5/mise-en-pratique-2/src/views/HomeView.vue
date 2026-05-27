<script setup>
import { ref } from 'vue'

//je cree des valeurs reactives pour chaque infos
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const legalStatus = ref('')

//je cree une ref avec un tab vide qui va recevoir des elements : les objets user que je cree a la soumission
const waitingList = ref([])

// je cree une fonction qui reinitialise mes champs a des strings vides
const resetForm = () => {
  firstname.value = ''
  lastname.value = ''
  email.value = ''
  legalStatus.value = ''
}

// je cree une ref pour le message a afficher si tous les champs ne sont pas remplis
const errorMessage = ref('')

const handleSubmit = () => {
  if (firstname.value && lastname.value && email.value && legalStatus.value) {
    // au clic je cree un objet avec seulement ces infos
    const user = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      legalStatus: legalStatus.value,
    }
    //J'ajoute cet objet user a mon tableau
    waitingList.value.push(user)
    // console.log(waitingList.value)

    resetForm() // jappelle la fonction qui vide les champs
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs'
  }
}
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="firstname"> Firstname :</label>
        <input type="text" id="firstname" v-model="firstname" @input="errorMessage = ''" />
        <label for="lastname"> Lastname :</label>
        <input type="text" id="lastname" v-model="lastname" @input="errorMessage = ''" />
        <label for="email"> Email :</label>
        <input type="text" id="email" v-model="email" @input="errorMessage = ''" />

        <div class="radio-buttons">
          <label for="adult">
            <input
              type="radio"
              name="legal-status"
              v-model="legalStatus"
              @input="errorMessage = ''"
              id="adult"
              value="adult"
            />Adult</label
          >
          <label for="minor">
            <input
              type="radio"
              name="legal-status"
              v-model="legalStatus"
              @input="errorMessage = ''"
              id="minor"
              value="minor"
            />Minor</label
          >
        </div>

        <button>Add to Waiting List</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>

    <div>
      <h1>Waiting List</h1>
      <p v-if="waitingList.length === 0">Nobody on the list yet !</p>
      <div v-else class="person-display">
        <div v-for="(user, index) in waitingList" :key="index" class="person">
          <p>Name : {{ user.firstname }} {{ user.lastname }}</p>
          <p>Email :{{ user.email }}</p>
          <p>is {{ user.legalStatus }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  /* hauteru : tout la page moins le header */
  height: calc(100vh - 60px);
}

main > div {
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  /* width: 300px; */
  align-items: center;
}

/* "Tous les input sauf ceux de type radio" */
input:not([type='radio']) {
  width: 200px;
}

form > label {
  margin: 20px 0 10px 0;
}

.radio-buttons {
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0px;
}

.person-display {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.person {
  border: 1px solid black;
  padding: 10px;
}

.person p {
  line-height: 20px;
}
</style>
