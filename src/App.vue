<template>
  <BaseHeader />
  <main>
    <VWrapper>
      <RouterView />
    </VWrapper>
  </main>
</template>

<style lang="scss">

</style>

<script setup>
import BaseHeader from "@/components/Base/VHeader.vue";
import VWrapper from "@/components/Base/VWrapper.vue";
</script>
