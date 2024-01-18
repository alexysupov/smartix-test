<template>
  <div class="item-page">
    <h1 class="item-page__name">
      {{ item.product.name }}
    </h1>
    <div class="item-page__price">
      Цена: {{ item.product.price }}
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/store/index.js'
import {useRoute} from "vue-router";

const store = useMainStore()
const route = useRoute()

const item = store.getItem(+route.params.id)
</script>

<style scoped>
.item-page__name {
  font-size: 24px;
  text-align: center;
}
.item-page__price {
  font-weight: bold;
  text-align: center;
  margin-top: 0.5rem;
}
</style>