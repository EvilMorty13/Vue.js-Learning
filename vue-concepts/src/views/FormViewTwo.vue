<template>
  <form @submit.prevent="submission">
    <BaseNameInput
      label="First Name"
      v-model:name="user.firstName"
      v-model:er="error.firstName"
      :maxLength="10"
      :minLength="3"
      placeholder="Enter your first name"
    />

    <BaseNameInput
      label="Last Name"
      v-model:name="user.lastName"
      v-model:er="error.lastName"
      :maxLength="10"
      :minLength="3"
      placeholder="Enter your last name"
    />

    <BaseNameInput
      label="Father Name"
      v-model:name="user.fatherName"
      v-model:er="error.fatherName"
      :maxLength="20"
      :minLength="10"
      placeholder="Enter your father name"
    />

    <BasePassword
        label="Password"
        v-model:pass="user.password"
        v-model:er="error.password"
        placeholder="Enter your password"
        :minLength="7"
      />

    <BaseDropdown
      label="Country"
      v-model:choice="user.selectedCountry"
      v-model:er="error.selectedCountry"
      :options="countries"
    />

    <BaseDropdown
      label="Company"
      v-model:choice="user.selectedCompany"
      v-model:er="error.selectedCompany"
      :options="companies"
    />


    <BasePhone
      label="Mobile Number"
      :country="user.selectedCountry"
      v-model:phone="user.phoneNo"
      v-model:er="error.phoneNo"
    />

    <button type="submit">Submit</button>

  </form>

  <div>
    <p>firstName : {{ user.firstName }}</p>
    <p>lastName : {{ user.lastName }}</p>
    <p>fatherName : {{ user.fatherName }}</p>
    <p>password : {{ user.password }}</p>
    <p>country : {{ user.selectedCountry }}</p>
    <p>company : {{ user.selectedCompany }}</p>
    <p>phone no : {{ user.phoneNo }}</p>
  </div>

  <div>
    <p>error firstName : {{ error.firstName }}</p>
    <p>error lastName : {{ error.lastName }}</p>
    <p>error fatherName : {{ error.fatherName }}</p>
    <p>error password : {{ error.password }}</p>
    <p>error country : {{ error.selectedCountry }}</p>
    <p>error company : {{ error.selectedCompany }}</p>
    <p>error phone no : {{ error.phoneNo }}</p>
  </div>

</template>


<script setup>
import { ref } from 'vue';
import BaseNameInput from '../components/FormComponents/BaseNameInput.vue';
import BasePassword from '../components/FormComponents/BasePassword.vue';
import BaseDropdown from '@/components/FormComponents/BaseDropdown.vue';
import BasePhone from '@/components/FormComponents/BasePhone.vue';

const user = ref({
  firstName: "",
  lastName: "",
  fatherName: "",
  password: "",
  selectedCountry: "",
  selectedCompany: "",
  phoneNo: "",
});


const countries = ['Bangladesh', 'USA'];
const companies = ['Google','Microsoft','Apple'];


const error = ref({
  firstName: null,
  lastName: null,
  fatherName: null,
  password: null,
  selectedCountry: "Select a country",
  selectedCompany: "Select a company",
  phoneNo: null,
});




function submission() {
  console.log({
    firstName: user.value.firstName,
    lastName: user.value.lastName,
    fatherName: user.value.fatherName,
    password: user.value.password,
    country: user.value.selectedCountry,
    company: user.value.selectedCompany,
    phoneNo: user.value.phoneNo
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
