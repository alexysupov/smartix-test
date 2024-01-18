import { defineStore } from 'pinia'
import data from '@/mocks/data.json'

export const useMainStore = defineStore('main', {
  state: () => ({
    groups: data.groups,
    items: data.items
  }),

  getters: {
    parentGroups: (state) => state.groups.filter(g => g.idParent === null),
    subGroups: (state) => state.groups.filter(g => g.idParent !== null)
  },

  actions: {
    getSubGroups(idGroup) {
      return this.subGroups.filter(g => g.idParent === idGroup)
    },
    hasSubGroups(idGroup) {
      return this.getSubGroups(idGroup).length > 0
    },
    getItems(idGroup) {
      return this.items.filter(i => i.idGroup === idGroup)
    },
    getItem(idItem) {
      return this.items.find(i => i.id === idItem)
    }
  }
})