<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="password"
      v-model="password"
      :minlength="minLength"
      :placeholder="placeholder"
      @input="validatePassword"
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
  minLength: {
    type: Number,
    default: 7,
  },
  placeholder: {
    type: String,
    default: 'Enter your password',
  },
});


const password = defineModel();
const errorMessage = ref('');


function validatePassword() {
  const value = password.value;


  const lengthRequirement = value.length >= props.minLength;
  const uppercaseRequirement = /[A-Z]/.test(value);
  const lowercaseRequirement = /[a-z]/.test(value);
  const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (!lengthRequirement) {
    errorMessage.value = `Password must be at least ${props.minLength} characters long.`;
  }
  else if (!uppercaseRequirement) {
    errorMessage.value = 'Password must contain at least 1 uppercase letter.';
  }
  else if (!lowercaseRequirement) {
    errorMessage.value = 'Password must contain at least 1 lowercase letter.';
  }
  else if (!specialCharRequirement) {
    errorMessage.value = 'Password must contain at least 1 special character.';
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
