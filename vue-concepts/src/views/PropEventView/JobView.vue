<template>
    <div v-for="(i, idx) in info" :key="idx" class="subcontainer">
      <p>Job Name : {{ i.name }}</p>
      <p>Salary : {{ i.salary }}</p>
      <p>Favourite : {{ i.fav}}</p>
      <p>Id : {{ idx }}</p>
      <button :class="i.fav ? 'unfav' : 'fav'" @click="$emit('makeFav', idx)">
        {{ i.fav ? 'Unfavourite' : 'Make Favourite' }}
      </button>
    </div>
</template>

<script setup>

defineProps([
  'info'
])

defineEmits([
  'makeFav'
])
</script>

<style scoped>

.subcontainer {
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 5px solid #000000;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  width: 40%;
}

.subcontainer:hover {
  transform: translateY(-5px);
  background-color: #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.fav{
  background-color: rgb(20, 84, 13);
}

.unfav{
  background-color: rgb(252, 0, 0);
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
