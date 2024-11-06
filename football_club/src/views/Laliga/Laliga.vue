<template>
  <div @click="handleNestedPageLaliga">
    <nav>
    <router-link :to="{ name: 'realmadrid' }">Real Madrid</router-link> |
    <router-link :to="{ name: 'barcelona' }">Barcelona</router-link> |
    <router-link :to="{ name: 'atleticomadrid' }">Atletico Madrid</router-link> |
     </nav>
  </div>
  <img :src="require('@/assets/Laliga/LaLiga.png')" alt="Laliga" v-if="!showNestedPageLaliga">
  <router-view v-if="showNestedPageLaliga"/>
</template>

<script>
export default {
  data(){
      return{
        showNestedPageLaliga: false
      }
    },
    methods:{
      handleNestedPageLaliga(){
        this.showNestedPageLaliga=true
      }
    }
}
</script>

<style>

</style>