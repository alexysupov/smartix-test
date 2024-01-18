<script setup>
import { useMainStore } from '@/store/index.js'
import { ref } from "vue";

import VWrapper from "@/components/Base/VWrapper.vue";

const store = useMainStore()
const activeGroupID = ref(null)

function getGroupLink(id) {
  return store.hasSubGroups(id) ? '' : `/group/${id}`
}
function onClickGroup(id) {
  activeGroupID.value = store.hasSubGroups(id) ? id : null
}
</script>

<template>
  <header class="header">
    <div class="header-groups">
      <VWrapper>
        <ul>
          <li>
            <RouterLink to="/" @click="activeGroupID = null">
              Главная
            </RouterLink>
          </li>
          <li
              v-for="group in store.parentGroups"
              :class="{ active: activeGroupID === group.id }"
              @click="onClickGroup(group.id)"
          >
            <RouterLink :to="getGroupLink(group.id)">
              {{ group.name }}
            </RouterLink>
          </li>
        </ul>
      </VWrapper>
    </div>
    <div
        v-if="activeGroupID"
        class="header-popup"
        @mouseleave="activeGroupID = null"
    >
      <VWrapper>
        <ul>
          <li v-for="group in store.getSubGroups(activeGroupID)">
            <RouterLink :to="'/group/' + group.id" @click="activeGroupID = null">
              {{ group.name }}
            </RouterLink>
          </li>
        </ul>
      </VWrapper>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  margin: 0.5rem;
}
.header-groups {
  background: var(--main-color);
  border-radius: 0.5rem;
  padding: 2px 0;

  ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  li {
    cursor: pointer;
    color: white;
    user-select: none;
    padding: 1rem 0.5rem;

    &.active {
      outline: 2px dashed white;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
}
.header-popup {
  position: absolute;
  top: calc(100% + 0.5rem);
  border-radius: 0.5rem;
  width: 100%;
  height: 200px;
  background: var(--main-color);
  padding: 1rem 0;
  color: white;

  ul {
    display: grid;
    gap: 0.5rem;
  }

  a {
    color: white;
  }
}
</style>