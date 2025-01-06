<template>
  <div>
    <h2>Blog Post Details</h2>
    <div v-if="post">
      <p><strong>ID:</strong> {{ post.id }}</p>
      <p><strong>Title:</strong> {{ post.title }}</p>
      <p><strong>Body:</strong> {{ post.body }}</p>
      <p><strong>Author:</strong> {{ post.author }}</p>
      <p><strong>Created at:</strong> {{ post.created_at }}</p>
      <p><strong>Updated at:</strong> {{ post.updated_at }}</p>
    </div>
    <div v-else>
      <p>Loading blog post details...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const post = ref(null);

console.log(`Test line`)

onMounted(async () => {
  try {
    console.log(route.params.id)
    const response = await axios.get(`http://localhost:8000/blogs/${route.params.id}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }
});
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}
</style>
