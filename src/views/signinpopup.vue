<script lang="ts" setup>
 import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver,  setInteractionMode } from 'vee-validate'
  import {ValidationProvider} from 'vee-validate'
  import {ref} from '@vue/composition-api';
  import axios from 'axios';
  setInteractionMode('eager')
  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} نمی تواند خالی باشد ',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
  var dialog = ref(false)
  var mobileNumber= ref('')
  function submit(){
    
   dialog.value = false
     axios.post('https://emserver.iran.liara.run/App/Auth/ValidationNumber', {
       "User_Phone_Number": "09331460389"
     }
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
  <v-div class="text-center">
    <v-dialog v-model="dialog" width="500" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark dense v-bind="attrs" v-on="on" active>
          ثبت نام ورود
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>


      </template>

     
      <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
   <v-card height="200px" class="d-flex flex-column justify-center" >
    <form @submit.prevent="submit"
            ref="form" 
            
            lazy-validation
            class="px-6 login-form align-center  "
            width="100%"
    >
      
     
      <validation-provider
        v-slot="{ errors }"
          name="شماره تلفن "
          :rules="{
          required: true,
          digits: 11,
          regex: '^(09)\\d{9}$'
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="11"
          :error-messages="errors"
          label="شماره تلفن همراه"
          required
        ></v-text-field>
        
      </validation-provider>
    
  
 

      <v-btn
        color=" primary  "
        class="mt-14  mr-auto d-flex "
        id="custom-disabled"
        type="submit"
        :disabled="invalid"
      >
       ثبت نام ورود 
      </v-btn>
   
    
    </form>
 </v-card>
  </validation-observer>
    </v-dialog>
    
  </v-div>
</template>
<style>
#custom-disabled.v-btn--disabled {
    background-color: #3949AB !important;
    color: white !important;
}
</style>
