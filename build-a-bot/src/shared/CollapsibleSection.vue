<template>
    <div>
      <div class="header">
        <span
          v-if="open"
          @click="open = !open"
          @keydown.enter="open = !open"
          @keydown.space="open = !open"
          tabindex="0"
          aria-expanded="true"
        >
          &#x25B2; Collapse
        </span>
        <span
          v-if="!open"
          @click="open = !open"
          @keydown.enter="open = !open"
          @keydown.space="open = !open"
          tabindex="0"
          aria-expanded="false"
        >
          &#x25BC; Expand
        </span>
      </div>
      <slot v-if="open"></slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>

.header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
}

</style>
