<template>
  <div class="player-container">
    <button @click="playerFunctions.prevPlayer">Prev Player</button>
    <p>{{playerFunctions.currentPlayer}}</p>
    <button @click="playerFunctions.nextPlayer">Next Player</button>
  </div>
</template>

<script setup>
import { usePlayerList } from '@/stores/PlayerList';

const playerFunctions = usePlayerList();

</script>


<style scoped>
.player-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
}

button {
  width: auto;
  height: auto;
  padding: 10px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #2C5F2D;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #97BC62;
}
p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}
</style>
