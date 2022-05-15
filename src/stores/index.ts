import { defineStore } from 'pinia'
interface defineStore {
  state: any;
  userdata:any
  age: number;
}
export const useCounterStores:any = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    formnout: [],
    dialogsms: false,
    userdata : {},
    logindata :{},
    adId : 0
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
