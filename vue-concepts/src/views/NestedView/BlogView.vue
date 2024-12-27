<template>
  <div class="blog-view">
    <h1>Blog Posts</h1>
    <ul class="blog-list">
      <li v-for="post in BlogFunction.blog" :key="post.id">
        <RouterLink :to="{ name: 'blog-post', params: { id: post.id } }">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>

    <div v-if="!$route.params.id">
      <h2>Click a post to see details</h2>
    </div>

    <RouterView v-if="$route.params.id" />
  </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/BlogStore';
const BlogFunction = useBlogStore();
</script>

<style scoped>
.blog-view {
  padding: 20px;
  text-align: center;
}
.blog-list {
  list-style: none;
  padding: 0;
}
.blog-list li {
  margin: 10px 0;
  font-size: 1.2rem;
}
.blog-list li a {
  text-decoration: none;
  color: #42b983;
}
.blog-list li a:hover {
  text-decoration: underline;
}
</style>
