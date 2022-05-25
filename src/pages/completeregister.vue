<script lang="ts" setup >

import { ref , reactive } from "@vue/composition-api"
import {  useCounterStores } from "../stores";  
import { storeToRefs } from "pinia";
import axios from 'axios'
const post = ref({})
let store = useCounterStores();

  var form = reactive({
    title: '',
    select: '',
    pichers: '',
    text: ''
  })

  function submitregister(){
    
  }
  function createpost(){
     axios.post('https://jsonplaceholder.typicode.com/posts', form
     ).then(function (response) {
       
      console.log(response.data)
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
               <v-text-field label=" نام  " v-model="form.title" prepend-icon="mdi-account">
          </v-text-field>
               
          </v-col>
          
          <v-col md="6" sm="12" cols="12">
               <v-text-field label=" نام خانوادگی  " v-model="form.title" prepend-icon="mdi-account-multiple">
          </v-text-field>
          
           
          </v-col>
        </v-row>
        <v-col md="12" xs="12" sm="12" cols="12">
          <v-text-field label=" عنوان آگهی را وارد فرمایید " v-model="form.title" prepend-icon="mdi-format-title">
          </v-text-field>
        </v-col>
        <v-row>
          <v-col>
          <v-textarea counter label="متن آگهی را وارد فرمایید "  v-model="form.text" :rules="rules" :value="value" prepend-icon="mdi-calendar-text"></v-textarea>
          
          </v-col>
        </v-row>


        <v-row>
         
          <v-btn class="my-4 mr-12 deep-purple accent-4" dense dark @click="submit" width="150px">ارسال </v-btn>
        </v-row>

     
      </v-form>
    </v-sheet>
  </div>

</template>
<style>

</style>