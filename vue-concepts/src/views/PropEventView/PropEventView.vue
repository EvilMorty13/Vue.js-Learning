<template>
  <div>
    <div class="nav">
      <div class="navSub">
        <button @click="showFavJob" class="navbutton">All Job</button>
      </div>
      <div class="navSub">
        <button @click="showFavJob" class="navbutton">Favourite Job</button>
      </div>
    </div>
    <MyWrapper>
      <JobView :info="jobInfo" :showFav="showFav" :attrData="attrData" :attrDataTwo="attrDataTwo" v-on:makeFav="makingFav"/>
    </MyWrapper>
  </div>
</template>

<script setup>
import { reactive,ref} from 'vue';
import JobView from './JobView.vue';
import MyWrapper from '@/components/MyWrapper.vue';


const showFav = ref(false);

function showFavJob(){
  showFav.value = !showFav.value;
}

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


const attrData = ref("This is attrData")
const attrDataTwo = ref("This is attrDataTwo")


</script>

<style scoped>

.nav{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
}

.navSub{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}


button {
  width: auto;
  height: auto;
  padding: 10px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #2C5F2D;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #97BC62;
}
</style>
