<template>
  <div class="maincontainer">
    <p v-highlight>{{ messageFromApp }}</p>

    <div class="subcontainer">
      <h1>Length: {{ cubeFunction.cube.length }}</h1>
      <button @click="cubeFunction.increaseLength">Increase Length</button>
    </div>

    <div class="subcontainer">
      <h1>Width: {{ cubeFunction.cube.width }}</h1>
      <button @click="cubeFunction.increaseWidth">Increase Width</button>
    </div>

    <div class="subcontainer">
      <h1>Height: {{ cubeFunction.cube.height }}</h1>
      <button @click="cubeFunction.increaseHeight">Increase Height</button>
    </div>
    <p>Unique-per-application ID : {{ id }}</p>
  </div>
</template>

<script setup>
import { useCubeStore} from '@/stores/CubeStore';
import { inject, useId,onMounted,getCurrentInstance,version } from 'vue';
const cubeFunction = useCubeStore()

const id = useId();
const messageFromApp = inject('message')
console.log(version)

onMounted(() => {
  const { appContext } = getCurrentInstance();
  const globalMsg = appContext.config.globalProperties.msg;
  console.log(globalMsg);
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

::v-deep(.is-highlight) {
  background-color: yellow;
}

</style>
