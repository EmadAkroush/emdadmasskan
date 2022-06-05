<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";
let store = useCounterStores()
let GetUser = ref()
function getUserUpdate(){
// Make a request for a user with a given ID

axios.get(`https://emserver.iran.liara.run/App/User/${JSON.parse(localStorage.getItem('login')).Data.User_Id}`)
  .then(function (response) {
    // handle success
    // posts.value = response.data;
   GetUser.value = response.data; 
   console.log("GetUser",GetUser.value)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
}
getUserUpdate()
</script>
<template>

<div class="ma-md-16 ma-5">
    
    <div
        v-for="(item, i) in GetUser"
       :key="i" 
    >
   
 <v-row>
    
     <v-col class="col-md-6 col-6">
           نام :  {{item.User_Name}} 
     </v-col>
     <v-col class="col-md-6 col-6">
          کد ملی : {{item.User_Nation}}
     </v-col>
 </v-row>

  <v-row>
     <v-col class="col-md-6 col-6">
            تلفن  :  {{item.User_Number}} 
     </v-col>
     <v-col class="col-md-6 col-6">
          طرح کابر: {{item.User_Plan}}
     </v-col>
 </v-row>
 <v-row>
     <v-col class="col-md-6 col-6">
            ادرس  :   {{item.User_Location}}
     </v-col>
     <v-col class="col-md-6 col-6">
          جنسیت: {{item.User_Gender}} 
     </v-col>
 </v-row>
  <v-row>
     <v-col class="col-md-6 col-6">
            نقش کاربر   : {{item.User_Role }} 
     </v-col>
     <v-col class="col-md-6 col-6">
          نوع تخصص :   
     </v-col>
 </v-row>
   

   </div>
</div>
</template>
<style>

</style>