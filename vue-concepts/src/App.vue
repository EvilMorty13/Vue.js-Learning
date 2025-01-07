<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Ref</RouterLink>
      <RouterLink to="/reactive" class="nav-link">Reactive</RouterLink>
      <RouterLink to="/life-cycle" class="nav-link">Life Cycle</RouterLink>
      <RouterLink to="/prop-event" class="nav-link">Prop Event</RouterLink>
      <RouterLink to="/define-model" class="nav-link">Define Model</RouterLink>
      <RouterLink to="/provide-inject" class="nav-link">Provide Inject</RouterLink>
      <RouterLink to="/composable" class="nav-link">Composable</RouterLink>
      <RouterLink to="/blog" class="nav-link">Nested Routing</RouterLink>
      <RouterLink to="/form" class="nav-link">Form</RouterLink>
      <RouterLink to="/form2" class="nav-link">Form 2</RouterLink>
      <RouterLink to="/blog-card" class="nav-link">API Call</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  padding: 1rem 2rem;
  background: #2C5F2D;
  border-bottom: 1px solid #60a5fa;
  border-radius: 20px;
  text-align: center;
}

.nav-link {
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
}

.nav-link:hover {
  background: #97BC62;
}

.router-link-active {
  background: #97BC62;
}

</style>
