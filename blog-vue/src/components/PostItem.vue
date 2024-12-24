<template>
  <div>
    <div class="header">
        <span>Written by {{ post.author }} on {{ post.created_at }}</span>
        <div>
          <button  @click="postStore.deletePost(post.id)" class="del material-icons">delete</button>
          <button @click="postStore.savePost(post.id)" class="save material-icons">{{ post.is_saved ? 'bookmark' : 'bookmark_border' }}</button>
        </div>
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { usePostsStore } from '@/stores/posts'
const postStore = usePostsStore()

defineProps({
  post:{
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bbf;
  color: #fff;
  padding: 10px;
  font-size: 14px;

  div {
    display: flex;
    gap: 10px;

    .material-icons {
      font-size: 20px;
      cursor: pointer;
      color: #fff;
      background: none;
      border: none;
      outline: none;

      &.del:hover {
        color: #ff5252;
      }
      &.save:hover {
        color: #76c7c0;
      }
    }
  }
}

h1 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  color: #333;
}

p {
  font-size: 14px;
  color: #555;
  margin: 0 10px 10px;
}

</style>
