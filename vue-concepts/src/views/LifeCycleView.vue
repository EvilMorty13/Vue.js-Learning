<template>
  <div class="maincontainer">
    <button @click="count++">Click Me : {{ count }}</button>
  </div>
</template>

<script setup>
import {ref,onBeforeMount,onMounted,onBeforeUnmount,onUnmounted,onUpdated,onBeforeUpdate} from 'vue';

const count = ref(0)

onBeforeMount(() => {
  console.log('onBeforeMount function');
});

onMounted(() => {
  console.log('onMounted function');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount function');
});

onUnmounted(() => {
  console.log('onUnmounted function');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate function');
});

onUpdated(() => {
  console.log('onUpdated function');
});
</script>

<style scoped>
.maincontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  margin: 100px;
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

</style>
