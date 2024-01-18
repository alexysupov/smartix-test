<template>
  <div class="group-page">
    <h1>{{ groupName }}</h1>
    <VWrapper>
      <div class="group-page__list">
        <Vcard
            class="group-page__item"
            v-for="item in store.getItems(+route.params.id)"
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
import {useRoute} from "vue-router";
import {computed} from "vue";

const store = useMainStore()
const route = useRoute()

const groupName = computed(() => {
  const group = store.groups.find(i => i.id === +route.params.id)
  return group?.name
})
</script>

<style lang="scss" scoped>
.group-page {
  margin-top: 1rem;

  h1 {
    font-size: 24px;
    text-align: center;
  }
}
.group-page__list {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>
