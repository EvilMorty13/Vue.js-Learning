<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import axios from '@/axios.js';
import { markFormSubmitted } from '@/router/index.js';

const router = useRouter();

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email().required('Email is required'),
      password: yup.string().min(8).required('Password is required'),
    }),
  ),
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submission = handleSubmit(async (values, { resetForm }) => {
  try {
    const response = await axios.post('/signin', {
      email: values.email,
      password: values.password,
    });

    console.log('Response:', response.data);

    markFormSubmitted();
    resetForm();

    router.push({
      path: '/success-page',
      query: {
        email: values.email,
      },
    });
  } catch (error) {
    console.error('Error submitting form:', error.response?.data || error.message);
  }
});
</script>

<template>
  <form @submit="submission">
    <label for="E-Mail">E-mail:</label><br />
    <input v-model="email" v-bind="emailAttrs" />
    <p class="errormsg">{{ errors.email }}</p>

    <label for="Password">Password:</label><br />
    <div class="password-container">
      <input
        v-model="password"
        v-bind="passwordAttrs"
        :type="showPassword ? 'text' : 'password'"
      />
      <span class="toggle-icon" @click="togglePasswordVisibility">
        {{ showPassword ? '👁️' : '👁️‍🗨️' }}
      </span>
    </div>
    <p class="errormsg">{{ errors.password }}</p>

    <button type="submit">Sign In</button>

    <h3>Don't have an account? <RouterLink to="/form">Sign Up</RouterLink></h3>
  </form>
</template>

<style scoped>
form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: 8px;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.password-container {
  display: flex;
  align-items: center;
  position: relative;
}

.password-container input {
  width: 100%;
}

.toggle-icon {
  position: absolute;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #555;
}

.errormsg {
  color: #d9534f;
  font-size: 12px;
  margin: 5px 0 12px 0;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  border: none;
  background-color: #2C5F2D;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 15px;
}

button:hover {
  background-color: #97BC62;
}
</style>
