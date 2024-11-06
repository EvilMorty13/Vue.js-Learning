<template>
  <div @click="handleNestedPageEpl">
    <nav>
    <router-link :to="{ name: 'manu' }">Manchester United</router-link> |
    <router-link :to="{ name: 'mancity' }">Manchester City</router-link> |
    <router-link :to="{ name: 'liverpool' }">Liverpool</router-link> |
    </nav>
  </div> 
  <img :src="require('@/assets/Epl/Epl.jpg')" alt="Epl" v-if="!showNestedPageEpl">
  <router-view v-if="showNestedPageEpl"/>
</template>

<script>
export default {
    data(){
      return{
        showNestedPageEpl: false
      }
    },
    methods:{
      handleNestedPageEpl(){
        this.showNestedPageEpl=true
      }
    }

}
</script>

<style>

</style>