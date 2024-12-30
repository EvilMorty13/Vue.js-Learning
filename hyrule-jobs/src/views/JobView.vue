<script setup lang="ts">
import { useJobStore } from '@/stores/JobStore';
import { ref, computed } from 'vue';

const { sortedBySalary, sortedByExperience } = useJobStore();

const sortOption = ref<'salary' | 'experience'>('salary');

const sortedJobs = computed(() => {
  return sortOption.value === 'salary'
    ? sortedBySalary
    : sortedByExperience;
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

    <p>Sorting by: {{ sortOption }}</p>

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

.job-item p{
  font-stretch: extra-expanded;
  font-size: 1.2rem;
}

</style>
