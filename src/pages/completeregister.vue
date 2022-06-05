<script lang="ts" setup >

import { ref , reactive } from "@vue/composition-api"
import {  useCounterStores } from "../stores";  
import { storeToRefs } from "pinia";
import axios from 'axios'
const post = ref({})
let store = useCounterStores();

  var form = reactive({
    Name: '',
    Nation: '',
    Telephone: '',
    Location: '',
    Gender: ''
  })
 
  
  function userUpdate(){
    let send = {
     User_Id : store.logindata.Data.User_Id,
     User_Name: form.Name,
     User_Nation : form.Nation,
     User_Telephone : form.Telephone,
     User_Location: form.Location,
     User_Gender: form.Gender
    }
     axios.put('https://emserver.iran.liara.run/App/User', send
     ).then(function (response) {
       
      console.log("User-update"+response.data)
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
 
  <div class="ma-md-16  ma-5">
    
    <v-sheet color=" white" elevation="3" height="auto" outlined rounded shaped width="100%">
      <v-form class="pa-4 px-md-14">
        <v-row>
          <v-col md="6" sm="12" cols="12">

               <v-text-field label=" نام و  نام خانوادگی " v-model="form.Name" prepend-icon="mdi-account">

          </v-text-field>
               
          </v-col>
          
          <v-col md="6" sm="12" cols="12">
               <v-text-field label="کدملی " v-model="form.Nation" prepend-icon="mdi-cellphone">
     
          </v-text-field>
          
           
          </v-col>
        </v-row>
        <v-col md="12" xs="12" sm="12" cols="12">
        
          <v-radio-group
      v-model="form.Gender"
      row
    >
        <v-icon> mdi-gender-male-female </v-icon>
    جنسیت
      <v-radio
        label="مرد"
        value="مرد"
      ></v-radio>
      <v-radio
        label="زن"
        value="زن"
      ></v-radio>
    </v-radio-group>
        </v-col>
        <v-row>
          <v-col>

          <v-text-field label=" شماره تلفن " v-model="form.Telephone" prepend-icon="mdi-cellphone">
              </v-text-field>
              
          </v-col>
          <v-col>
            
          </v-col>
        </v-row>
          <v-row>
          <v-col>

          <v-text-field label=" آدرس  " v-model="form.Location" prepend-icon="mdi-map-marker">
              </v-text-field>
              
          </v-col>
         
        </v-row>


        <v-row>
         
          <v-btn class="my-4 mr-12 deep-purple accent-4" dense dark @click="userUpdate" width="150px">ارسال </v-btn>
        </v-row>

     
      </v-form>
    </v-sheet>
  </div>

</template>
<style>

</style>