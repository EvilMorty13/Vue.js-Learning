<template>
    <h1>Parent</h1>
    <p>Parent Count : {{ parentConst }}</p>
    <p>Parent Message : {{ welcomeMsg }}</p>
    <DefineModelChildren v-model:pc="parentConst" v-model:wm="welcomeMsg"/>
</template>

<script setup>
import { ref } from 'vue';
import DefineModelChildren from './DefineModelChildren.vue';

const parentConst = ref(0)
const welcomeMsg = ref("This is a message from parent")


</script>

<style scoped>

</style>
