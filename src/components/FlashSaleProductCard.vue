<template>
  <div class="h-full w-1/5 bg-white mx-2 p-2 relative">
    <div class="flex justify-between">
      <div class="rounded-full h-10 w-10 py-2 text-center text-white bg-red-circle text-sm" >34%</div>
      <font-awesome-icon class="text-gray-400 text-lg" :icon="['far', 'star']" />
    </div>
    <div class="flex justify-center my-2">
      <img src="https://place-hold.it/200x160" alt="" srcset="">
    </div>
    <div class="text-center">
      <div class="mb-2">{{product.name}}</div>
      <div>{{product.description}}</div>
      <div class="line-through text-gray-500 text-sm">Rp {{product.mrp}}</div>
      <div>Rp {{product.price}}</div>
    </div>

    <div class="absolute bottom-0 left-0 w-full flex justify-center mb-5">
      <v-button class="w-5/6" v-if="product.showReview"> See Review </v-button>

      <div class="w-full px-2" v-if="showSellingFast">
        <b-progress :value="100 - percentLeft" :max="100" ></b-progress>
        <div class="text-red uppercase text-sm"> Selling fast </div>
      </div>

      <div class="w-full px-2" v-if="showStocksLeft">
        <b-progress :value="100 - percentLeft" :max="100" ></b-progress>
        <div class="text-gray-500 text-sm"> Already Sold {{this.product.totalUnits - this.product.unitsLeft}} </div>
      </div>

      <div class="text-red z-20" v-if="showSoldOut">
        Available in normal price
      </div>      
    </div>
    
    <div 
      v-if="showSoldOut"
      class="absolute top-0 left-0 w-full h-full bg-white opacity-50 flex justify-center pt-20">
      <div class="z-10 opacity-50 bg-black text-white w-3/4 h-20 py-3 text-xl uppercase text-center">
        Flash sale sold out
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashSaleProductCard',
  props: ['product'],
  computed: {
    showStocksLeft () {
      const { showReview, unitsLeft } = this.product
      const { percentLeft } = this
      return (
        !showReview && 
        unitsLeft > 0 &&
        percentLeft > 20
      )
    },
    percentLeft () {
      const { unitsLeft, totalUnits } = this.product
      return (unitsLeft/totalUnits)*100
    },
    showSellingFast () {
      const { showReview, unitsLeft } = this.product
      const { percentLeft } = this
      return (
        !showReview && 
        unitsLeft > 0 &&
        percentLeft <= 20
      )
    },
    showSoldOut () {
      const { showReview, unitsLeft } = this.product
      return (
        !showReview && 
        unitsLeft == 0
      )
    }
  }
}
</script>

<style scoped>
  .bg-red-circle {
    background-color: #da2a52;
  }
  .text-red {
    color:  #da2a52
  }
</style>