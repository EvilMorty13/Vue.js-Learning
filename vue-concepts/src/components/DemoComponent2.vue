<template>
  <div class="section">
    <h2>Received from Parent:</h2>
    <p class="name">{{ firstName }} {{ lastName }}</p>
    <button class='btn' @click="changeName">Change Name From Child</button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  fname: {
    type: Object,
    required: true
  }
});


const { firstName, lastName } = toRefs(props.fname);

function changeName() {
  firstName.value = "Spider";
  lastName.value = "Man";
}
</script>

<style scoped>
.section {
  text-align: center;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8E44AD;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #031c2c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

.btn:hover {
  background-color: #2980B9;
}

</style>
