<template>
  <form @submit="submission">
    <BaseNameInput
      label="First Name"
      v-model="firstName"
      :maxLength="10"
      :minLength="3"
      placeholder="Enter your first name"
    />

    <BaseNameInput
      label="Last Name"
      v-model="lastName"
      :maxLength="10"
      :minLength="3"
      placeholder="Enter your last name"
    />

    <BaseNameInput
      label="Father Name"
      v-model="fatherName"
      :maxLength="20"
      :minLength="10"
      placeholder="Enter your father name"
    />

    <BasePassword
        label="Password"
        v-model="password"
        placeholder="Enter your password"
        :minLength="7"
      />

    <BaseDropdown
      label="Country"
      v-model="selectedCountry"
      :options="countries"
    />

    <BaseDropdown
      label="Company"
      v-model="selectedCompany"
      :options="companies"
    />


    <BasePhone
      label="Mobile Number"
      :country="selectedCountry"
      v-model="phoneNo"
    />

    <button type="submit">Submit</button>

  </form>
  <p>firstName : {{ firstName }}</p>
  <p>lastName : {{ lastName }}</p>
  <p>fatherName : {{ fatherName }}</p>
  <p>password : {{ password }}</p>
  <p>country : {{ selectedCountry }}</p>
  <p>company : {{ selectedCompany }}</p>
  <p>phone no : {{ phoneNo }}</p>
</template>


<script setup>
import { ref } from 'vue';
import BaseNameInput from '../components/FormComponents/BaseNameInput.vue';
import BasePassword from '../components/FormComponents/BasePassword.vue';
import BaseDropdown from '@/components/FormComponents/BaseDropdown.vue';
import BasePhone from '@/components/FormComponents/BasePhone.vue';


const firstName = ref('');
const lastName = ref('');
const fatherName = ref('');
const password = ref('');

const selectedCountry = ref('');
const countries = ['Bangladesh', 'USA'];

const selectedCompany = ref('');
const companies = ['Google','Microsoft','Apple'];

const phoneNo = ref('')

function submission(event) {
  event.preventDefault();
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    fatherName: fatherName.value,
    password: password.value,
    country: selectedCountry.value,
    company: selectedCompany.value,
    phoneNo: phoneNo.value
  });
}

</script>


<style scoped>
form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
