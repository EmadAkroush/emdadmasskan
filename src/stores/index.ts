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
    adData: {},
    formnout: [],
    dialogsms: false,
    userdata : {},
    logindata :{},
    adId : 0,
    userId : 0,
    adIdPublic : 0,
    userlogin: false,
    listUserShow: false,
    listAdShow: false,
    creatAdShow: false,
    loginShow: true,
    logoutShow: false,
    emdadmaskanManShow: false

  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
   
  }
})
