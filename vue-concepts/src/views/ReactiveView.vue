<template>
  <div class="maincontainer">
    <div class="subcontainer">
      <h1>Length: {{ cube.length }}</h1>
      <button @click="cube.length++">Increase Length</button>
    </div>

    <div class="subcontainer">
      <h1>Width: {{ cube.width }}</h1>
      <button @click="cube.width++">Increase Width</button>
    </div>

    <div class="subcontainer">
      <h1>Height: {{ cube.height }}</h1>
      <button @click="cube.height++">Increase Height</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const cube = reactive({
  length: 10,
  width: 20,
  height: 30
});
</script>

<style scoped>
.maincontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  margin: 100px;
}

.subcontainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  width: auto;
  height: auto;
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
</style>
