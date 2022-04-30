import { defineStore } from 'pinia'

export const useCounterStores = defineStore({
  id: 'counter',
  state: () => ({
    counter: 2,
    formnout: [],
    dialog: false
    
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
