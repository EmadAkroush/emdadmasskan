<script lang="ts" setup>

  import {ref , reactive} from '@vue/composition-api';
  import axios from 'axios';
  import {  useCounterStores } from "../stores";
  let store = useCounterStores();
 var valid = ref(true);

var nameRules = reactive([
 v => !!v || 'وارد کردن شماره موبایل اجباری است',
 v => (v && v.length == 11) || 'شماره موبایل باید یازده رقم باشد ',
]
)

 




  var dialog = ref(false)
  var mobileNumber= ref('')
  function submit(){
   store.dialogsms = true
   dialog.value = false
     axios.post('https://emserver.iran.liara.run/App/Auth/ValidationNumber', {
       "User_Phone_Number": mobileNumber.value
     }
     ).then(function (response) {
         store.userdata = response.data;
      //  loading.value = false;
    // console.log(store.userdata.Data.ID);
   

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
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark dense v-bind="attrs" v-on="on" active>
          ثبت نام ورود
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>


      </template>

     

   <v-card height="200px" class="d-flex flex-column justify-center" >
       <v-form
    ref="form"
    v-model="valid"
    lazy-validation
       class="px-6 login-form align-center  "
            width="100%"
  >
    <v-text-field
      v-model="mobileNumber"
      :counter="11"
      :rules="nameRules"
      label="شماره تلفن"
      required
    ></v-text-field>

    

    <v-btn
        :disabled="!valid"
        color=" primary  "
        class="mt-14  mr-auto d-flex "
        id="custom-disabled"
        @click="submit()"
    >
      ورود ثبت نام 
    </v-btn>

  
  </v-form>
    </v-card>
  
    </v-dialog>
    
  </div>
</template>
<style>
#custom-disabled.v-btn--disabled {
    background-color: #3949AB !important;
    color: white !important;
}
</style>
