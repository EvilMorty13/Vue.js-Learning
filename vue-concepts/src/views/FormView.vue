<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      firstName: yup
        .string()
        .matches(/^[A-Za-z\s]+$/, 'First name must contain only letters and spaces')
        .required('First name is required'),
      lastName: yup
        .string()
        .matches(/^[A-Za-z\s]+$/, 'Last name must contain only letters and spaces')
        .required('Last name is required'),
      email: yup.string().email().required('Email is required'),
      password: yup.string().min(8).required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
  ),
});

const [firstName, firstNameAttrs] = defineField('firstName');
const [lastName, lastNameAttrs] = defineField('lastName');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const submission = handleSubmit((values, { resetForm }) => {
  console.log(values.firstName, values.lastName, values.email, values.password);
  resetForm();
});
</script>

<template>
  <form @submit="submission">
    <label for="FirstName">First Name:</label><br />
    <input v-model="firstName" v-bind="firstNameAttrs" />
    <p class="errormsg">{{ errors.firstName }}</p>

    <label for="LastName">Last Name:</label><br />
    <input v-model="lastName" v-bind="lastNameAttrs" />
    <p class="errormsg">{{ errors.lastName }}</p>

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

    <label for="ConfirmPassword">Confirm Password:</label><br />
    <div class="password-container">
      <input
        v-model="confirmPassword"
        v-bind="confirmPasswordAttrs"
        :type="showConfirmPassword ? 'text' : 'password'"
      />
      <span class="toggle-icon" @click="toggleConfirmPasswordVisibility">
        {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
      </span>
    </div>
    <p class="errormsg">{{ errors.confirmPassword }}</p>

    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
}

input {
  width: calc(100% - 40px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.password-container {
  display: flex;
  align-items: center;
}

.toggle-icon {
  cursor: pointer;
  margin-left: -30px;
  font-size: 18px;
}

.errormsg {
  color: #d9534f;
  font-size: 12px;
  margin-bottom: 12px;
}

button {
  width: 100%;
  height: auto;
  padding: 10px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #2C5F2D;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;
}
button:hover {
  background-color: #97BC62;
}
</style>
