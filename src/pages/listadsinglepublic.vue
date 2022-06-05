<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  

let singleAdpublic:any = ref()





let store = useCounterStores();

let adIdInsidepublic = ref(store.adIdPublic) 
     function getad() {
        // Make a request for a user with a given ID
        console.log(store.adId)
        axios.get(`https://emserver.iran.liara.run/App/Ad/${adIdInsidepublic.value}`)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
           
                singleAdpublic.value = response.data;
                console.log("singleAdpublic",singleAdpublic.value)
              
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    getad()
   
    function sendOrder(){
            let sendOrderData = {
                 UserID: store.logindata.Data.User_Id,
                 ADID: adIdInsidepublic.value,
                 Answare:"{[],[],[],[],[],[],[],[],[],[]}",
                 Date:"2020/12/12 12:12",
                 Price:"20000"
           }
           axios.post('https://emserver.iran.liara.run/App/Shop/Cart', sendOrderData)
          
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
           
                 response.data;
                console.log("sendOrderData" , response.data)
              
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }


      
 let imageSingle = ref('')


  
// let imgAd = ref(`https://emserver.iran.liara.run/App/Ad/ADImage/${adIdInside.value}`)

</script>
<template>
<div class="ma-md-16 ma-5">
<div
v-for="(item, i) in singleAdpublic" :key="i"
>
 <h1 class="my-color">{{item.Title}}</h1>
 <v-img
  :src="`https://emserver.iran.liara.run/App/Ad/ADImage/${item._id}`"
   class="mx-auto"
   height="auto"
   width="660px"
 >

 </v-img>
 <p>
   {{item.Description}}
 </p>
<v-btn
  class="my-4"
  elevation="2"
  color="primary"
  @click="sendOrder()"
> پرداخت</v-btn>
</div>
</div>
   
</template>
<style>
.my-color{
  color: rgba(0,0,0,.75) !important;
  
}
</style>