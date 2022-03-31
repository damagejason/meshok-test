<template>
  <div class="menu">
    <div class="menu__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseMenu"
}
</script>

<style scoped>
  .menu {

  }

  .menu__wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
