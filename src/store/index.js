import { defineStore } from 'pinia'
import data from '@/mocks/data.json'

export const useMainStore = defineStore('main', {
  state: () => ({
    groups: data.groups,
    items: data.items
  }),

  getters: {
    parentGroups: (state) => state.groups.filter(group => group.idParent === null),
    subGroups: (state) => state.groups.filter(group => group.idParent !== null)
  },

  actions: {
    getSubGroups(idGroup) {
      return this.subGroups.filter(group => group.idParent === idGroup)
    },
    hasSubGroups(idGroup) {
      return this.getSubGroups(idGroup).length > 0
    },
    getFilteredItems(keyword) {
      return this.items.filter(item => {
        const nameLower = item.product.name.toLowerCase()
        const keyLower = keyword.toLowerCase()
        return nameLower.includes(keyLower)
      })
    },
    getItems(idGroup) {
      return this.items.filter(item => item.idGroup === idGroup)
    },
    getItem(idItem) {
      return this.items.find(item => item.id === idItem)
    },
  }
})