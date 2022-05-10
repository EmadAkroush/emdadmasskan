import { defineStore } from 'pinia'

export const useCounterStores = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    formnout: [],
    dialogsms: false,
    userdata : {},
    logindata :{},
    adId : {}
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
