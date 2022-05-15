<script lang="ts" setup>

  import {ref , reactive} from '@vue/composition-api';
  import axios from 'axios';
  import {  useCounterStores } from "../stores";
  let store = useCounterStores();
  var valid = ref(true);

var nameRules = reactive([
 (v:any) => !!v || 'وارد کردن کد اهراز هویت  اجباری است',
 (v:any) => (v && v.length == 5) || ' کد اهراز هویت  ',

]
)

 




  var dialog = ref(false)
  var kodeNumber= ref('')
  function submit(){
   store.dialogsms = false
   
     axios.post('https://emserver.iran.liara.run/App/Auth/SingUp', {
    "Code_ID": store.userdata.Data.ID,
    "User_Submit_Code": kodeNumber.value
    
   }
     ).then(function (response) {
        //  store.userdata = response.data;
      //  loading.value = false;
      console.log(store.userdata.Data.ID)
      store.logindata = response.data
   
    

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
    <v-dialog v-model="store.dialogsms" width="500" >
  

     

   <v-card height="200px" class="d-flex flex-column justify-center" >
       <v-form
    ref="form"
    v-model="valid"
    lazy-validation
       class="px-6 login-form align-center  "
            width="100%"
  >
    <v-text-field
      v-model="kodeNumber"
      :counter="5"
      :rules="nameRules"
      label="کد ارسال شده را وارد فرمایید"
      required
    ></v-text-field>

    

    <v-btn
        :disabled="!valid"
        color=" primary  "
        class="mt-14  mr-auto d-flex "
        id="custom-disabled"
        @click="submit()"
    >
      ورود
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
