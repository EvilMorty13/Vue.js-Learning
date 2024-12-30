import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useJobStore = defineStore('jobStore', () => {
  type Job = {
    name: string;
    salary: number;
    description: string;
    experience: number;
  };

  const jobs = ref<Job[]>([
    { name: 'Hero of Time', salary: 5000, description: 'Protect Hyrule from evil forces.', experience: 1 },
    { name: 'Hyrule Guard', salary: 3000, description: 'Defend the castle and royal family.', experience: 6 },
    { name: 'Potion Maker', salary: 2000, description: 'Craft potions to aid adventurers.', experience: 3 },
    { name: 'Fairy Guide', salary: 2500, description: 'Assist travelers and heroes on their journey.', experience: 4 },
    { name: 'Blacksmith', salary: 4000, description: 'Forge weapons and armor.', experience: 7 },
  ]);


  const sortedBySalary = computed(() => {
    return [...jobs.value].sort((a, b) => a.salary - b.salary);
  });

  const sortedByExperience = computed(() => {
    return [...jobs.value].sort((a, b) => a.experience - b.experience);
  });

  return {
    jobs,
    sortedBySalary,
    sortedByExperience,
  };
});
