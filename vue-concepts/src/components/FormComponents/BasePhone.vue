<template>
  <div>
    <label>{{ label }}</label>
    <div style="display: flex; align-items: center;">
      <span class="prefix">{{ prefix }}</span>
      <input
        type="number"
        v-model="localPhone"
        :placeholder="placeholder"
        @input="updatePhoneNumber"
      />
    </div>
    <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  country: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'Mobile Number',
  },
  placeholder: {
    type: String,
    default: 'Enter your mobile number',
  }
});

const localPhone = ref('');
const prefix = ref('');
const errorMessage = defineModel('er');
const completePhoneNo = defineModel('phone');



const countryConfig = {
  USA: { prefix: '+1', digits: 10 },
  Bangladesh: { prefix: '+880', digits: 10 },
};

// Watch for changes in country and update prefix
watch(
  () => props.country,
  (newCountry) => {
    const config = countryConfig[newCountry];
    if (config) {
      prefix.value = config.prefix;
      localPhone.value = ''; // Clear input when the country changes
      errorMessage.value = '';
    } else {
      prefix.value = '';
    }
  },
  { immediate: true }
);

// Emit updated value to parent whenever the phone number changes
function updatePhoneNumber() {
  const config = countryConfig[props.country];
  if (config) {
    const maxLength = config.digits;
    const phoneNumber = String(localPhone.value);


    if (phoneNumber.length < maxLength) {
      errorMessage.value = `There should be ${maxLength} digits for ${props.country}.`;
    }
    else if (phoneNumber.length > maxLength) {
      errorMessage.value = `Number should not exceed ${maxLength} digits for ${props.country}.`;
    }
    else {
      errorMessage.value = '';
    }
  }
  completePhoneNo.value = prefix.value + localPhone.value;
}
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.prefix {
  padding: 10px;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  font-size: 1rem;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
}

.error-msg {
  color: #d9534f;
  font-size: 12px;
  margin-top: 4px;
}
</style>
