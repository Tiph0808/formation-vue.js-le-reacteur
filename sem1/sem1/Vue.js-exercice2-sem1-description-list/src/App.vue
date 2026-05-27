<script setup>
const firstPerson = {
  gender: 'female',
  firstname: 'Emily',
  lastname: 'Parker',
  age: 24,
  job: 'Teacher',
  hobbies: ['read books', 'go hiking'],
  pet: {
    name: 'Whiskers',
    age: 2,
    species: 'ferret',
  },
}

const secondPerson = {
  gender: 'male',
  firstname: 'Marcus',
  lastname: 'Bennett',
  age: 38,
  job: 'Architect',
  hobbies: ['watch bird', 'play chess'],
  pet: {
    name: 'Nala',
    age: 6,
    species: 'dog',
  },
}

const thirdPerson = {
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'Environmental scientist',
  hobbies: ['play guitar', 'bake cakes'],
  pet: {
    name: 'Paws',
    age: 3,
    species: 'cat',
  },
}

const fourthPerson = {
  gender: 'male',
  firstname: 'Oliver',
  lastname: 'Hughes',
  age: 56,
  job: 'Carpenter',
  hobbies: ['paint', 'ride horses'],
  pet: {
    name: 'Bubble',
    age: 4,
    species: 'snake',
  },
}
</script>

<template>
  <main>
    <h1>Description list</h1>
    <div>
      <section>
        <img src="./assets/img/emily-parker.jpg" alt="" />
        <div>
          <h2>{{ firstPerson.firstname }} {{ firstPerson.lastname }}</h2>

          <p>
            {{ firstPerson.gender === 'female' ? 'She' : 'He' }} is a {{ firstPerson.age }}-year-old
            {{ firstPerson.job.toLowerCase() }}.
          </p>

          <p>
            Outside of work, {{ firstPerson.firstname }} likes to {{ firstPerson.hobbies[0] }} and
            {{ firstPerson.hobbies[1] }}.
          </p>

          <p>
            At home, {{ firstPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ firstPerson.pet.name }} a {{ firstPerson.pet.age }}-year-old
            {{ firstPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>

      <section>
        <img src="./assets/img/marcus-bennett.jpg" alt="" />
        <div>
          <h2>{{ secondPerson.firstname }} {{ secondPerson.lastname }}</h2>

          <p>
            {{ secondPerson.gender === 'female' ? 'She' : 'He' }} is a
            {{ secondPerson.age }}-year-old {{ secondPerson.job.toLowerCase() }}.
          </p>

          <p>
            Outside of work, {{ secondPerson.firstname }} likes to {{ secondPerson.hobbies[0] }} and
            {{ secondPerson.hobbies[1] }}.
          </p>

          <p>
            At home, {{ secondPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ secondPerson.pet.name }} a {{ secondPerson.pet.age }}-year-old
            {{ secondPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>

      <section>
        <img src="./assets/img/sophia-rodriguez.jpg" alt="" />
        <div>
          <h2>{{ thirdPerson.firstname }} {{ thirdPerson.lastname }}</h2>

          <p>
            {{ thirdPerson.gender === 'female' ? 'She' : 'He' }} is a {{ thirdPerson.age }}-year-old
            {{ thirdPerson.job.toLowerCase() }}.
          </p>

          <p>
            Outside of work, {{ thirdPerson.firstname }} likes to {{ thirdPerson.hobbies[0] }} and
            {{ thirdPerson.hobbies[1] }}.
          </p>

          <p>
            At home, {{ thirdPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ thirdPerson.pet.name }} a {{ thirdPerson.pet.age }}-year-old
            {{ thirdPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>

      <section>
        <img src="./assets/img/olivier-hughes.jpg" alt="" />
        <div>
          <h2>{{ fourthPerson.firstname }} {{ fourthPerson.lastname }}</h2>

          <p>
            {{ fourthPerson.gender === 'female' ? 'She' : 'He' }} is a
            {{ fourthPerson.age }}-year-old {{ fourthPerson.job.toLowerCase() }}.
          </p>

          <p>
            Outside of work, {{ fourthPerson.firstname }} likes to {{ fourthPerson.hobbies[0] }} and
            {{ fourthPerson.hobbies[1] }}.
          </p>

          <p>
            At home, {{ fourthPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ fourthPerson.pet.name }} a {{ fourthPerson.pet.age }}-year-old
            {{ fourthPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 50px;
  background-color: #c9e2c2;
  /* hauteur minimum : signifie "on veut une hauteur de la taille de l'ecran voir plus si doit scroller (pour le responsive telephone)"   */
  min-height: 100vh;
}

main > div {
  /* border: 1px solid red; */
  display: flex;
  gap: 10px;
}

section {
  border: 1px solid green;
  min-height: 450px;
  height: 100%;
  width: calc((100% - 30px) / 4);
  /* RMQ : on a besoin d'un calcul pour definir la largeur de nos sections : on veut qu'elles occupent tout l'espace dispo, avec un espace entre chaque. Le calcul a faire pour la largeur de chaque sevction est : (espace dispo (=100%)- espaces entre chaque(=gap*3)) divisé par 4 */
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 7px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  height: 200px;
  width: 100%;
  /*pour que nos images restent toujours proportionelles meme si la largeur notre ecran retrecit, on utilise la pp aspect-ratio (ATTENTION ! il faut toujours donner au moins une dimension! width or height) */
  aspect-ratio: 16/9;
  margin-bottom: 20px;
  object-fit: cover;
  /* on veut etre sur de toujours voir la tete de nos personnes sans qu'elle soit coupé au niveau du crane ou dun chapeau par exemple donc : */
  object-position: top;
  border-radius: 10px;
}

/* rajouté avec IA*/
section > div {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

p {
  line-height: 20px;
  margin-bottom: 10px;
  font-size: 22px;
}

svg {
  color: grey;
  margin-top: 20px;
  align-self: flex-end;
}

/* RESPONSIVE */

/* en dessous de 1250px  */

@media (max-width: 1250px) {
  /* repere visuel pour savoir qu on est effectivement en dessous de 1250px , et ne pas avoir a regarder la "regle" en haut de l'ecran avec les dimensions de linspecteur */
  /* main {
    background-color: lightblue;
  } */

  /* on donne une largeur fixe a notre section , ici on decide de la meme largeur que celle que nos sections prennent naturellement lorsqu on est a 1250px (donc 200px) , on doit donc "ecraser" la valeur width definie plus haut*/
  section {
    width: 200px;
    min-height: 350px;
    /*min-height rajoutée sur conseils IA */
  }

  /* rajouté avec IA */
  section > div {
    min-height: 150px;
  }

  /* on autorise les enfants a revenir a la ligne */
  main > div {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* largeur telephone */

/* on doit restyliser le titre qui est trop grand, on a commencé a stylisé h1 dans le main css donc on continue a le faire la bas */
</style>
