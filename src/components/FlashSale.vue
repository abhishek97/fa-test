<template>
  <div class="bg w-full">
    <div class="text-center text-4xl py-2">Flash Sale</div>
    <div class="text-center text-md">
      <span class="px-3">Will End In</span>
      <FlashSaleClock />
    </div>

    <div class="products flex justify-center mt-4">
      <div class="w-5/6 relative">
        <font-awesome-icon class="left-control absolute top-1/2 text-3xl" icon="chevron-left" />
        <font-awesome-icon @click="addProduct" class="right-control absolute top-1/2 right-0 text-3xl" icon="chevron-right" />

        <div class="slider flex h-full">
          <FlashSaleProductCard 
            v-for="product in products" 
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <v-button class="mt-8 p-2 w-1/6">See More</v-button>
    </div>
  </div>
</template>

<script>

import FlashSaleClock from './FlashSaleClock.vue'
import FlashSaleProductCard from './FlashSaleProductCard.vue';
export default {
  name: 'FlashSale',
  components: {
    FlashSaleClock,
    FlashSaleProductCard
  },
  data () {
    return {
      products: [{
        id: 1,
        name: 'LANEIGE',
        description: 'Cushion Duo Set 2',
        mrp: '1.500.000',
        price: '1.148.000',
        showReview: true,
        totalUnits: 500,
        unitsLeft: 80
      }, {
        id: 2,
        name: 'MASAMI SHOUKO PROFESIONAL',
        description: 'Cushion Duo Set 2 Perfecting Cushion…',
        mrp: '1.500.000',
        price: '1.148.000',
        showReview: false,
        totalUnits: 500,
        unitsLeft: 50
      }, {
        id: 3,
        name: 'MASAMI SHOUKO PROFESIONAL',
        description: 'Cushion Duo Set 2 Perfecting Cushion…',
        mrp: '1.500.000',
        price: '1.148.000',
        showReview: false,
        totalUnits: 500,
        unitsLeft: 230
      }, {
        id: 4,
        name: 'MASAMI SHOUKO PROFESIONAL',
        description: 'Cushion Duo Set 2 Perfecting Cushion…',
        mrp: '1.500.000',
        price: '1.148.000',
        showReview: false,
        totalUnits: 500,
        unitsLeft: 0
      }, {
        id: 5,
        name: 'MASAMI SHOUKO PROFESIONAL',
        description: 'Cushion Duo Set 2 Perfecting Cushion…',
        mrp: '1.500.000',
        price: '1.148.000',
        showReview: false,
        totalUnits: 500,
        unitsLeft: 450
      }]
    } 
  },
  methods: {
    addProduct () {
      console.log("called") // eslint-disable-line no-console
      this.products.push({
        id: this.products.length+1
      })
    }
  }
}
</script>

<style scoped>
  .bg {
    height: 685px;
    background-image: url('/bg.jpg');
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .products {
    height: 470px;
  }

  .top-1\/2 {
    top: 50%
  }

  .left-control {
    left: -40px
  }

  .right-control {
    right: -40px;
  }


</style>