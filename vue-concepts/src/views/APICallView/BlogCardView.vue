<template>
  <div class="header">
    <h1>Blogs</h1>
    <RouterLink :to="{ name: 'blog-card-add' }" class="add-blog-icon">+</RouterLink>
  </div>

  <MyWrapper>
    <div class="subcontainer" v-for="blog in blogs" :key="blog.id">
      <h3>Title : {{ blog.title }}</h3>
      <p>Body : {{ blog.body }}</p>
      <p>Author : {{ blog.author }}</p>
      <RouterLink :to="{ name: 'blog-card-detail', params: { id: blog.id } }">
        View Details
      </RouterLink>
    </div>
  </MyWrapper>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue';
import axios from '@/axios.js';
import MyWrapper from '@/components/MyWrapper.vue';
const blogs = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('/blogs/');
    blogs.value = response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
});

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
}

h1 {
  flex-grow: 1;
  text-align: center;

}

.add-blog-icon {
  font-size: 36px;
  padding: 0px 10px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 0, 0);
  border-radius: 50%;
  transition: 0.3s;
}

.add-blog-icon:hover {
  color: rgb(255, 0, 0);
  background-color: #000000;
}


.subcontainer {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 5px solid #000000;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  width: 40%;
}

.subcontainer:hover {
  transform: translateY(-5px);
  background-color: #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}

h3 {
  margin: 0 0 10px;
}

p {
  margin: 0;
}


</style>
