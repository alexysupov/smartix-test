<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    validator: (value) =>
        value.hasOwnProperty('id') &&
        value.hasOwnProperty('idGroup') &&
        value.hasOwnProperty('product')
  }
})
</script>

<template>
  <RouterLink :to="'/item/' + item.id" class="card">
    <div class="card-name">
      {{ props.item.product.name }}
    </div>
   <div class="card-price">
       {{ props.item.product.price }}
   </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: var(--main-color);
  color: white;
  cursor: pointer;
  text-decoration: none;
}
.card-price {
  font-weight: bold;
  margin-top: 5px;
}
</style>