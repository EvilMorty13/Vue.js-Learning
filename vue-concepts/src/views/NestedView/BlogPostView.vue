<template>
  <div class="blog-post">
    <h2>Blog Post Details</h2>
    <p><strong>ID:</strong> {{ post.id }}</p>
    <p><strong>Title:</strong> {{ post.title }}</p>
    <p><strong>Content:</strong> {{ post.content }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogStore } from '@/stores/BlogStore';

const route = useRoute();

const blogStore = useBlogStore();

const post = computed(() => {
  return blogStore.blog.find(p => p.id === parseInt(route.params.id));
});
</script>

<style scoped>
.blog-post {
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
}
</style>
