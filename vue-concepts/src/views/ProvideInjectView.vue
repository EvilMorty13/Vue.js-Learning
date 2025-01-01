<template>
  <MyWrapper>
    <ProductItem />
  </MyWrapper>
</template>

<script setup>
import { provide } from 'vue';
import ProductItem from "@/components/ProductItem.vue";
import Smartphone from '@/assets/smartphone.png';
import MoneyBag from '@/assets/moneybag.png';
import Watch from '@/assets/watch.png';
import TShirt from '@/assets/tshirt.png';
import MyWrapper from '@/components/MyWrapper.vue';

const productDetails = [
  {
    id: 1,
    image: Smartphone,
    name: 'SmartPhone',
    price: 1500,
  },
  {
    id: 2,
    image: MoneyBag,
    name: 'MoneyBag',
    price: 200,
  },
  {
    id: 3,
    image: Watch,
    name: 'Watch',
    price: 2000,
  },
  {
    id: 4,
    image: TShirt,
    name: 'T-Shirt',
    price: 500,
  }
];

provide('productDetails', productDetails);

</script>

<style scoped>

</style>
