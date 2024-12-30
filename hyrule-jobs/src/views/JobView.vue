<script setup lang="ts">
import { useJobStore } from '@/stores/JobStore';
import { ref, computed } from 'vue';
import AddJob from '@/components/AddJob.vue';

const jobStore = useJobStore(); 

const showPopup = ref(false);

function changePopupStatus() {
  showPopup.value = !showPopup.value;
}

const sortOption = ref<'salary' | 'experience'>('salary');

const sortedJobs = computed(() => {
  return sortOption.value === 'salary'
    ? jobStore.sortedBySalary
    : jobStore.sortedByExperience;
});
</script>

<template>
  <main class="job-view">
    <h1>Job Listings</h1>

    <div class="sorting-options">
      <label>
        <input
          type="radio"
          name="sort"
          value="salary"
          v-model="sortOption"
        />
        Sort by Salary
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="experience"
          v-model="sortOption"
        />
        Sort by Experience
      </label>
    </div>

    <div>
      <button v-if="!showPopup" @click="changePopupStatus" class="add-job-button">+</button>
      <AddJob :visible="showPopup" @close-popup="changePopupStatus"/>
    </div>

    <ul class="job-list">
      <li v-for="job in sortedJobs" :key="job.name" class="job-item">
        <h2>{{ job.name }}</h2>
        <p>Salary : {{ job.salary }} rupees</p>
        <p>Experience : {{ job.experience }} years</p>
        <p>Description : {{ job.description }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.job-view {
  padding: 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.sorting-options {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.job-list {
  list-style: none;
  padding: 0;
}

.job-item {
  background-color: #f9f9f9;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.job-item p {
  font-stretch: extra-expanded;
  font-size: 1.2rem;
}

.add-job-button {
  background-color: #4caf50;
  color: white;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.add-job-button:hover {
  background-color: #45a049;
  transform: scale(1.1);
}

.add-job-button:active {
  transform: scale(0.95);
}
</style>
