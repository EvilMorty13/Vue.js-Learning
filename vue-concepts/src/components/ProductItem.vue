<template>
  <div class="product-card" v-for="product in productDetails" :key="product.id">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-price">৳ {{ product.price }}</p>
  </div>
  <p>hasInjection : {{ hasInjection }}</p>
</template>

<script setup>
import { inject ,hasInjectionContext} from 'vue';

const productDetails = inject('productDetails');

const hasInjection = hasInjectionContext();

</script>

<style scoped>
.product-card {
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 5px solid #000000;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px);
  background-color: #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.product-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.product-price {
  font-size: 1.2rem;
  color: rgb(255, 0, 0);
  font-weight: bold;
  font-size: 2rem;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

</style>
