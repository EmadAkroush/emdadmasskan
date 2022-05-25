<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  


let singleUser = ref()


let store = useCounterStores();

var items = ['کاربر', 'اپراتور', ' متخصص ', ' نماینده ', ' مدیرکل',]
let userIdInside = ref(store.userId) 
     function getUser() {
        // Make a request for a user with a given ID
        console.log(store.adId)
        axios.get(`https://emserver.iran.liara.run/App/User/${userIdInside.value}`)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
           
                singleUser.value = response.data;
                console.log("hhhhh",singleUser.value)
              
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    getUser()

 let UserRole = ref()    
 let imageSingle = ref('')

 function updateUser(){

let updateRole:any = reactive({
    "User_ID": store.userId,
    "Role": UserRole

})
console.log("update", updateRole)
     axios.post('https://emserver.iran.liara.run/App/User/ChangeRole', updateRole)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                console.log("Update-Role",response.data)
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

}
    
    
  
  

</script>
<template>
<div class="ma-md-16 ma-5">
    
    <div
       v-for="(item, i) in singleUser"
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
            ادرس  :   
     </v-col>
     <v-col class="col-md-6 col-6">
          جنسیت: {{item.User_Gender}} 
     </v-col>
 </v-row>
  <v-row>
     <v-col class="col-md-6 col-6">
            نقش کاربر   : {{item.User_Role}} 
     </v-col>
     <v-col class="col-md-6 col-6">
          نوع تخصص :   
     </v-col>
 </v-row>
   <v-row>
     <v-col class="col-md-6 col-6">
         <v-row>
             <v-col>
           تغییر نقش کاربر   :
           </v-col> 
           <v-col>  
        <v-select
          :items="items"
          label="انتخاب نقش"
          solo
          v-model="UserRole"
        ></v-select>
        
        </v-col> 
        </v-row>
     </v-col>
     <v-col class="col-md-6 col-6">
         تغییر نوع تخصص  : 
     </v-col>
 </v-row>
 <v-row>
     <v-btn elevation="2" @click="updateUser()"> بروزرسانی </v-btn>

 </v-row>
   </div>
</div>
   
</template>
<style>

</style>