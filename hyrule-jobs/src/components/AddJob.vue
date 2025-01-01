<template>
  <div class="popup-overlay" v-if="visible">
    <div class="popup">
      <h1>Add Job</h1>
      <form @submit.prevent="addJob">
        <div class="form-group">
          <label for="name">Job Name</label>
          <input id="name" v-model="job.name" type="text" placeholder="Enter job name" required />
        </div>

        <div class="form-group">
          <label for="salary">Salary</label>
          <input id="salary" v-model="job.salary" type="number" placeholder="Enter salary" required />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="job.description" placeholder="Enter job description" required></textarea>
        </div>

        <div class="form-group">
          <label for="experience">Experience (Years)</label>
          <input id="experience" v-model.number="job.experience" type="number" placeholder="Enter required experience" required />
        </div>

        <div class="button-group">
          <button type="submit">Add Job</button>
          <button type="button" @click="closePopup">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useJobStore } from '@/stores/JobStore';


const emit = defineEmits<{
  (event: 'close-popup'): void;
}>();

defineProps({
  visible: Boolean,
});

const job = ref({
  name: '',
  salary: 0,
  description: '',
  experience: 0,
});

const jobStore = useJobStore();

function addJob() {
  jobStore.addJobInStore({ ...job.value });
  resetForm();
  alert('Job added successfully!');
  emit('close-popup');
}

function closePopup() {
  emit('close-popup');
}

function resetForm() {
  job.value = {
    name: '',
    salary: 0,
    description: '',
    experience: 0,
  };
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
}


button {
  margin-top: 10px;
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

button[type='button'] {
  background-color: #f44336;
}

button[type='button']:hover {
  background-color: #e53935;
  transform: scale(1.05);
}
</style>
