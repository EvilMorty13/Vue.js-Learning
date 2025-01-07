<template>
    <h1>Children</h1>
    <p>{{ msg }}</p>
    <p>Parent bound v-model is: {{ count }}</p>
    <button @click="update">Increment</button>

</template>

<script setup>
const count = defineModel('pc', { required: true });
const msg = defineModel('wm', { required: true });

const mm2 = defineModel('mm', { required: true });

msg.value = "Message is changed from children"

mm2.value = "valvarde";

function update() {
  count.value++
}
</script>

<style scoped>

</style>
