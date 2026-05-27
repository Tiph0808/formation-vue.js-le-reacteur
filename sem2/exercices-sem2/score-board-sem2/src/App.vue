<script setup>
import { reactive } from 'vue'

const users = reactive([
  {
    id: 1,
    alias: 'Alfred',
    gender: 'male',
    age: 32,
    level: 'Expert',
    numberOfWin: 2,
    actualScore: 0,
  },
  {
    id: 2,
    alias: 'Lisa',
    gender: 'female',
    age: 29,
    level: 'Intermediate',
    numberOfWin: 1,
    actualScore: 0,
  },
])

const addOnePoint = (player) => {
  if (player === 'Alfred') {
    users[0].actualScore = users[0].actualScore + 1
  } else if (player === 'Lisa') {
    users[1].actualScore = users[1].actualScore + 1
  }
}

const addTwoPoints = (player) => {
  if (player === 'Alfred') {
    users[0].actualScore = users[0].actualScore + 2
  } else if (player === 'Lisa') {
    users[1].actualScore = users[1].actualScore + 2
  }
}

const addFivePoints = (player) => {
  if (player === 'Alfred') {
    users[0].actualScore = users[0].actualScore + 5
  } else if (player === 'Lisa') {
    users[1].actualScore = users[1].actualScore + 5
  }
}

const resetCounters = () => {
  users[0].actualScore = 0
  users[1].actualScore = 0
}

const addPoints = (player, points) => {
  if (player === 'Alfred') {
    users[0].actualScore = users[0].actualScore + points
  } else if (player === 'Lisa') {
    users[1].actualScore = users[1].actualScore + points
  }
}

const pointsValueList = reactive([1, 2, 5])
</script>

<template>
  <h1>ScoreBoard</h1>
  <section>
    <div
      v-for="user in users"
      :key="user.id"
      :class="{
        borderBottom: user.alias === 'Alfred',
      }"
    >
      <div class="player">
        <h2>{{ user.alias }}</h2>
        <p>{{ user.age }}</p>
        <p>level {{ user.level }}</p>
      </div>

      <p class="victories">
        {{ user.gender === 'female' ? 'She' : 'He' }} has already
        <span>{{ user.numberOfWin }}</span>
        {{ user.numberOfWin > 1 ? 'victories' : 'victory' }}
      </p>

      <div class="score-counter">
        <p>Actual Score</p>
        <div>{{ user.actualScore }}</div>
      </div>

      <!-- <div>
      <button @click="addOnePoint(user.alias)">Add 1 point</button>
      <button @click="addTwoPoints(user.alias)">Add 2 points</button>
      <button @click="addFivePoints(user.alias)">Add 5 points</button>
    </div> -->

      <!-- <div>
      <button @click="addPoints(user.alias, 1)">Add 1 point</button>
      <button @click="addPoints(user.alias, 2)">Add 2 point</button>
      <button @click="addPoints(user.alias, 5)">Add 5 point</button>
    </div> -->

      <div class="add-points">
        <button
          v-for="(number, index) in pointsValueList"
          :key="index"
          @click="addPoints(user.alias, number)"
        >
          Add {{ number }} {{ number > 1 ? 'points' : 'point' }}
        </button>
      </div>
    </div>
  </section>
  <div class="reset">
    <button @click="resetCounters">Reset</button>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Play', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #ff7f4f;
  text-align: center;
  margin: 20px 0px 80px 0px;
}
h2 {
  font-size: 20px;
  font-weight: bold;
  font-family: 'Playpen Sans', cursive;
}

section {
  display: flex;

  justify-content: center;
  align-items: center;
}

.borderBottom {
  border-right: 1px solid #ff7f4f;
}

section > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
}

.player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
}

.player > p {
  font-family: 'Playpen Sans', cursive;
  font-size: 12px;
}

.victories {
  font-family: 'Play', sans-serif;
}

.victories span {
  color: #ff7f4f;
  font-weight: bold;
}

.score-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.score-counter p:first-child {
  text-align: center;
  font-family: 'Play', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.score-counter div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff7f4f;
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 50%;
  font-family: 'Play', sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.add-points {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.add-points button {
  color: #ff7f4f;
  border: 2px solid #ff7f4f;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
}

.reset {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.reset button {
  background-color: white;
  padding: 5px 10px;
  color: gray;
  border: 2px solid gray;
  border-radius: 5px;
}

.add-points button:hover {
  color: white;
  background-color: #ff7f4f;
  transform: scale(1.2);
}
</style>
