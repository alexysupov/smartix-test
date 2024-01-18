<template>
  <div class="main-page">
    <VWrapper>
      <VInput
          class="main-page__input"
          v-model="search"
          placeholder="Поиск"
      />

      <div class="main-page__list">
        <Vcard
            class="main-page__item"
            v-for="item in store.getFilteredItems(search)"
            v-bind="{ item }"
        />
      </div>
    </VWrapper>
  </div>
</template>

<script setup>
import VWrapper from "@/components/Base/VWrapper.vue";
import Vcard from "@/components/Base/VCard.vue";
import VInput from "@/components/UI-Kit/VInput.vue";

import { useMainStore } from '@/store/index.js'
import { ref } from "vue";

const store = useMainStore()
const search = ref('')
</script>

<style lang="scss" scoped>
.main-page {
  margin-top: 1rem;
}
.main-page__input {
  width: 100%;
}
.main-page__list {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>
