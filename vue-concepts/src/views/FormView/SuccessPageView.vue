<template>
  <div class="maincontainer">
    <h1>Success</h1>
    <p>Your form has been successfully submitted!</p>
    <p>Welcome, {{ firstName }} {{ lastName }}!</p>
  </div>
</template>

<script setup>
defineProps({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
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
</style>
