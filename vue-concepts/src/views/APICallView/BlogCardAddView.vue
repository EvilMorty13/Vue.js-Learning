<template>
  <div>
    <form @submit.prevent="addBlog">
      <label for="title">Title:</label>
      <input v-model="newPost.title" type="text" id="title" />

      <label for="body">Body:</label>
      <textarea v-model="newPost.body" id="body"></textarea>

      <label for="author">Author:</label>
      <input v-model="newPost.author" type="text" id="author" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/axios.js';

const newPost = ref({
  title: '',
  body: '',
  author: '',
});

const addBlog = async () => {
  try {
    const response = await axios.post(`/blogs/`, newPost.value);
    newPost.value = response.data
    alert('Blog added successfully!');
    newPost.value = { title: '', body: '', author: '' };
  } catch (error) {
    console.error('Error adding blog:', error);
    alert('Failed to add blog. Please try again.');
  }
};
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

label {
  margin: 10px 0 5px;
  font-weight: bold;
}

input,
textarea {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
