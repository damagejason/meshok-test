<template>
  <div class="menu__item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItem"
}
</script>

<style scoped>
  .menu__item {
    padding: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #202020;
    display: flex;
    cursor: pointer;
  }
</style>
