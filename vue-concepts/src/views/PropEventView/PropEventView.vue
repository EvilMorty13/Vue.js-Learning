<template>
  <div>
    <MyWrapper>
      <JobView :info="jobInfo" v-on:makeFav="makingFav"/>
    </MyWrapper>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import JobView from './JobView.vue';
import MyWrapper from '@/components/MyWrapper.vue';

const jobInfo = reactive([
  {
    name: "It",
    salary: "20000",
    fav: false
  },
  {
    name: "Frontend Developer",
    salary: "40000",
    fav: false
  },
  {
    name: "Backend Developer",
    salary: "50000",
    fav: false
  },
  {
    name: "Tester",
    salary: "30000",
    fav: false
  },
]);

function makingFav(idx) {
  jobInfo[idx].fav = !jobInfo[idx].fav;
}

</script>

<style scoped>

</style>
