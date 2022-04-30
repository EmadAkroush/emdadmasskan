<script lang="ts" setup>
  import {ref} from '@vue/composition-api';
  import axios from 'axios';
    var dialog = ref(true) 
    var showlogin=ref(true);
    var mobileNumber= ref()
  function loginfunction(){
    var showlogin=ref(false);
  }
  
function getTheFormNumber(){
  axios.get('https://jsonplaceholder.typicode.com/posts')

  .then(function (response) {
     mobileNumber.value = response.data;
      //  loading.value = false;
    console.log(mobileNumber.value);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  dialog.value = false
}



</script>
<template>
  <v-div class="text-center" >
    <v-dialog v-model="dialog" width="500" >
  

      <v-card height="200px" class="d-flex flex-column justify-center" >

            
            <v-form 
            ref="form" 
            v-model="valid" 
            lazy-validation
            class="px-6 login-form align-center  "
            width="100%"
            >
            
          <v-text-field class=""  v-model="name" :counter="11" :rules="number" label="کد دریافت شده را وارد کنید " required></v-text-field>
          
        </v-form>


       

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color=" primary align-end"  class="mt-14" text @click="getTheFormNumber()">
            ثبت نام ورود
          </v-btn>
        </v-card-actions>
    
      </v-card>
    </v-dialog>
  </v-div>
</template>
<style>

</style>
