<template>
    <div class="wrapper">
      <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  font-family: Arial, sans-serif;
}
</style>
