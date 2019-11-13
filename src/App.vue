<template>
  <div id="app">
    <FlashSale />
  </div>
</template>

<script>

import FlashSale from './components/FlashSale.vue'
export default {
  name: 'app',
  components: {
    FlashSale
  }
}
</script>

<style src="./assets/tailwind.css"> </style>

<style>
* {
  box-sizing: border-box;
}
</style>