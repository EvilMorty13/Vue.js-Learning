<template>
  <h1>{{title}}</h1>
  <br>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>  
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign Up to newsletter</h1>
      <p>For updates and promocode!</p>
    </Modal>  
  </div>

  <button @click="toggleModal">Show Modal</button><br>
  <button @click="toggleModalTwo">Show Modal Two</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{
     Modal
  },
  data(){
    return {
      title: 'My First Vue App',
      header: 'Sign Up for the Giveaway!',
      text: 'Grab your ninja swag for half price',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
