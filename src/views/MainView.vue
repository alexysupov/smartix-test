<template>
  <div class="main-page">
    <VWrapper>
      <div class="main-page__list">
        <Vcard
            class="main-page__item"
            v-for="item in store.items"
            v-bind="{ item }"
        />
      </div>
    </VWrapper>
  </div>
</template>

<script setup>
import VWrapper from "@/components/Base/VWrapper.vue";
import Vcard from "@/components/Base/VCard.vue";

import { useMainStore } from '@/store/index.js'
const store = useMainStore()
</script>

<style lang="scss" scoped>
.main-page {
  margin-top: 1rem;
}
.main-page__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>
