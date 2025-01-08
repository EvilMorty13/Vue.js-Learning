<template>
  <div>
    <label>{{ label }}</label>
    <select v-model="selectedValue" @change="validateOption">
      <option v-for="option in options" :key="option">
          {{ option }}
      </option>
    </select>
    <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
  </div>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    default: 'Select an option:',
  },
  options: {
    type: Array,
    required: true,
  },
});

const selectedValue = defineModel('choice');
const errorMessage = defineModel('er');

function validateOption() {
  if (selectedValue.value) {
    errorMessage.value = "";
  }
}
</script>

<style scoped>
.error-msg {
  color: #d9534f;
  font-size: 12px;
  margin-top: 4px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  box-sizing: border-box;
}

select:focus {
  border-color: #4CAF50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}
</style>
