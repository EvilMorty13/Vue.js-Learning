<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ totalMoney }}</h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    totalMoney: {
    type: Number,
    required: true,
  },
});
</script>
