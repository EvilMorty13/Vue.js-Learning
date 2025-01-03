<template>
    <h1>Children</h1>
    <p>{{ msg }}</p>
    <p>Parent bound v-model is: {{ count }}</p>
    <button @click="update">Increment</button>
</template>

<script setup>
const count = defineModel('pc', { required: true });
const msg = defineModel('wm', { required: true });

msg.value = "Message is changed from children"

function update() {
  count.value++
}
</script>

<style scoped>

</style>
