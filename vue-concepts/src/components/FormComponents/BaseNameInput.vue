<template>
  <div>
    <label>{{ label }}</label>
    <input
      v-model="name"
      :maxlength="maxLength"
      :minlength="minLength"
      :placeholder="placeholder"
      @input="validateName"
    />
    <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  maxLength: {
    type: Number,
    default: 255,
  },
  minLength: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
    default: '',
  },
});


const name = defineModel();
const errorMessage = ref('');


function validateName(){
  const value = name.value;

  if (/\d/.test(value)) {
    errorMessage.value = `Numbers are not allowed.`;
    name.value = value.replace(/\d/g, '');
  }
  else if (value.length < props.minLength) {
    errorMessage.value = `Minimum length is ${props.minLength} characters.`;
  }
  else if (value.length > props.maxLength) {
    errorMessage.value = `Maximum length is ${props.maxLength} characters.`;
  }
  else {
    errorMessage.value = '';
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
  margin-bottom: 4px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}
</style>
