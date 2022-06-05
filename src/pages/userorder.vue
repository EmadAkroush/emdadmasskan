<script setup lang="ts"> 
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  
import  useRouter    from "vue-router";
import  useRoute    from "vue-router";

let UserdataAd = ref() 
var userOrder = ref()
let arrayAdDetails:any = []
function getUserOrder(){
// Make a request for a user with a given ID
let covert:any = localStorage.getItem('login')
axios.get(`https://emserver.iran.liara.run/App/Shop/Cart/UserCart/${JSON.parse(covert).Data.User_Id}`)
  .then(function (response) {
      
    // handle success
    // posts.value = response.data;
   userOrder.value = response.data; 
   console.log("userOrder.value",userOrder.value)
   for (var key in userOrder.value) {
        console.log("userOrder",userOrder.value[key].ADID)
            axios.get(`https://emserver.iran.liara.run/App/Ad/${userOrder.value[key].ADID}`)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
           
                arrayAdDetails.push(response.data)
                UserdataAd.value = response.data
               
              
            })

   }

   console.log("UserdataAd", arrayAdDetails)
  }
   
  )
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
}
getUserOrder()


</script>
<template>
  <div class="ma-md-16 ma-5">
      
    
       
         <div v-for="(item , i) in arrayAdDetails" :key="i" >
              <div v-for="(itema , i) in item" :key="i" >
       
        </div>
        </div>
        

  
  </div>

</template>
<style>

</style>