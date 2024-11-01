<template>
  <p>Reaction Time {{score}} ms</p>
  <p>Rank : {{calculateRank}}</p>
</template>

<script>
export default {
    props:['score'],
    computed:{
        calculateRank(){
            if(this.score<250){
                return 'Ninja'
            }
            else if(this.score<1000){
                return 'Shinobi'
            }
            else{
                return 'Sloth'
            }
        }
    }
}
</script>

<style>

</style>