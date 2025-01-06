<template>
  <div>
    <h2>Blog Post Details</h2>
    <div v-if="post">

      <div v-if="!showUpdateBlog">
        <p><strong>ID:</strong> {{ post.id }}</p>
        <p><strong>Title:</strong> {{ post.title }}</p>
        <p><strong>Body:</strong> {{ post.body }}</p>
        <p><strong>Author:</strong> {{ post.author }}</p>
        <p><strong>Created at:</strong> {{ post.created_at }}</p>
        <p><strong>Updated at:</strong> {{ post.updated_at }}</p>
      </div>

      <button v-if="!showUpdateBlog" @click="changeStatus">Update Blog</button>
      <button v-if="!showUpdateBlog" @click="deleteBlog">Delete Blog</button>

      <form v-if="showUpdateBlog" @submit.prevent="updateBlog">
        <label for="title">Title:</label>
        <input v-model="editForm.title" type="text" id="title" />

        <label for="body">Body:</label>
        <textarea v-model="editForm.body" id="body"></textarea>

        <label for="author">Author:</label>
        <input v-model="editForm.author" type="text" id="author" />

        <button type="submit">Submit</button>
        <button type="button" @click="changeStatus">Cancel</button>
      </form>
    </div>
    <div v-else>
      <p>Loading blog post details...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from '@/axios.js';

const route = useRoute();
const router = useRouter();
const post = ref(null);
const editForm = ref({
  title: '',
  body: '',
  author: '',
});
const showUpdateBlog = ref(false);

function changeStatus() {
  showUpdateBlog.value = !showUpdateBlog.value;
}

const fetchBlog = async () => {
  try {
    const response = await axios.get(`/blogs/${route.params.id}`);
    post.value = response.data;

    editForm.value.title = post.value.title;
    editForm.value.body = post.value.body;
    editForm.value.author = post.value.author;
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }
};

const updateBlog = async () => {
  try {
    const response = await axios.put(`/blogs/${route.params.id}`, editForm.value);
    post.value = response.data;
    alert('Blog updated successfully!');
    showUpdateBlog.value = false;
  } catch (error) {
    console.error('Error updating blog:', error);
    alert('Failed to update blog. Please try again.');
  }
};

const deleteBlog = async () => {
  try {
    const confirmation = confirm("Are you sure you want to delete this blog?");
    if (!confirmation) return;

    await axios.delete(`/blogs/${route.params.id}`);
    alert('Blog deleted successfully!');
    router.push('/blog-card');
  } catch (error) {
    console.error('Error deleting blog:', error);
    alert('Failed to delete blog. Please try again.');
  }
};

onMounted(fetchBlog);
</script>


<style scoped>
/* Typography and Layout */
h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #555;
  line-height: 1.6;
}

/* Card Style for Blog Details */
div {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

div p {
  background-color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Form Styles */
form {
  margin-top: 20px;
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #444;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f9f9f9;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

/* Buttons */
button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button[type="button"] {
  background-color: #6c757d;
}

button[type="button"]:hover {
  background-color: #5a6268;
}

/* Form Alignment */
form button[type="submit"] {
  margin-right: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  div {
    padding: 1rem;
  }

  form {
    padding: 1rem;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>

