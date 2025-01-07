<template>
    <h1>Parent</h1>
    <p>Parent Count : {{ parentConst }}</p>
    <p>Parent Message : {{ welcomeMsg }}</p>
    <DefineModelChildren v-model:pc="parentConst" v-model:wm="welcomeMsg" v-model:mm="real.person1"/>
    <p>{{real.person1}}</p>
</template>

<script setup>
import { ref } from 'vue';
import DefineModelChildren from './DefineModelChildren.vue';

const parentConst = ref(0)
const welcomeMsg = ref("This is a message from parent")

const real = ref({
   person1: "Mbappe",
   person2: "Vini"
});

</script>

<style scoped>

</style>
