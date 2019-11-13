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
.progress-bar {
  background-color: #da2a52;
  border-radius: 10px;
  height: 10px;
}
.progress {
  background-color: #f5b0b3;
  border-radius: 10px;
  height: 10px;
}
</style>