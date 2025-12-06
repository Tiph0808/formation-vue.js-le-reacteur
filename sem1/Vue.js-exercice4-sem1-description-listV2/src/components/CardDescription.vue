<script setup>
import Title from './Title.vue'
import FirstParagraph from './FirstParagraph.vue'
import SecondParagraph from './SecondParagraph.vue'
import ThirdParagraph from './ThirdParagraph.vue'

const props = defineProps({
  personInfos: Object,
})

// console.log(props.personInfos)
</script>

<template>
  <!-- <section :style="{ boxShadow: `0 0 7px ${props.personInfos.favoriteColor}` }"> :  jai trouvé cette facon de faire moi même sur internet mais la correction est beaucoup plus simple :/ voir dans style-->
  <section>
    <img
      src="https://media.istockphoto.com/id/515930993/vector/man-head-and-shoulders-silhouette-with-excalmation-mark-vector.jpg?s=612x612&w=0&k=20&c=z5S6LDk3CDOox5jSM0mSCIqxjslxHUZ3tVipKlCLWVw="
      alt=""
    />
    <div>
      <Title
        :firstname="personInfos.firstname"
        :lastname="personInfos.lastname"
        :gender="personInfos.gender"
      />

      <FirstParagraph :gender="personInfos.gender" :age="personInfos.age" :job="personInfos.job" />

      <SecondParagraph
        :firstname="personInfos.firstname"
        :hobbyOne="personInfos.hobbies[0]"
        :hobbyTwo="personInfos.hobbies[1]"
      />

      <ThirdParagraph
        :gender="personInfos.gender"
        :petName="personInfos.pet.name"
        :petAge="personInfos.pet.age"
        :petSpecies="personInfos.pet.species"
      />
    </div>
    <font-awesome-icon :icon="['fas', 'heart']" />
  </section>
</template>

<style scoped>
section {
  /* border: 1px solid red; */
  flex: 1;
  background-color: #eeeeee;
  padding: 20px;
  border-radius: 10px;
  /* ci dessous on rend la pp css dynamique, on veut que la couleur de l'ombre soit la couleur preferee dela personne, au lieu de definir une color on utilise la directive v-bind pour acceder a la valeur favorite color dans l'objet personInfos a la clé favoriteColor et donner cette valeur a la pp css : genial! pratique! */
  box-shadow: 0 0 7px v-bind('personInfos.favoriteColor');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  width: 100%;
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
}

svg {
  align-self: flex-end;
  color: grey;
}

/*******RESPONSIVE*****/

@media (max-width: 1250px) {
  section {
    flex: none;
    /*si on veut une largeur fixe, il faut LOGIQUEMENT "écraser" le flex:1 defini plus haut dans le style de la section" */
    width: 250px;
  }
}
</style>
