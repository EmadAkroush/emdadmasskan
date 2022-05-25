
<script lang="ts">

export default {
  
   beforeRouteEnter (to, from, next) {
     let store = useCounterStores()
      
    if(JSON.parse(localStorage.getItem('login')).Meta.status == 200){
     
     next()
   }else{
     
   }
console.log(store.logindata.Meta.status)
   }
}

</script>




<script lang="ts" setup >
import Vue from 'vue';

import { ref , reactive } from "@vue/composition-api";
import {  useCounterStores } from "../stores";  
import axios from 'axios';


const post = ref({})
let store = useCounterStores();

  var form = reactive({
    title: '',
    select: '',
    pichers: '',
    text: ''
  })
   var items = ['نظافت و شست و شو ', 'اسباب کشی بسته بندی', 'نصب و تعمیر لوازم منزل ', 'تعمیر و سرویس تجهیزات گرمایشی و سرمایشی ', ' نگهداری ساختمان', 'زیبایی', 'خودرو ']
function createpost() {
  let a:any = form.pichers
  console.log("a", a);
  const reader = new FileReader()
  let convertimg = []
  let rawImg:any;
  var imgstr:any;
  reader.onloadend = () => {
    rawImg = reader.result;
    imgstr = rawImg
    let imgsplit = rawImg.split(",");
    convertimg.push(imgsplit[1]);
    // let convertvar = convertimg[0];
    console.log("dsd", imgsplit);
     let agahi = {
    Image: imgsplit[1],
    Description: form.text,
    Category: form.select,
    Title: form.title,
    UserID: store.logindata.Data.User_Id
    
  }
    axios.post('https://emserver.iran.liara.run/App/Ad', agahi
  )
    .then(function (response) {
      console.log("agahi", agahi);
      console.log("response.data", response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

  reader.readAsDataURL(a[0]);
  
 


  
}
 
</script>
<template>

  <div class="ma-md-16 ma-5">
   
  
    <v-sheet color="white" elevation="3" height="auto" outlined rounded shaped width="100%">
      <v-form class="pa-4 px-md-14">
        <v-row>
          <v-col md="6" sm="12" cols="12">
            <v-select prepend-icon="mdi-microsoft-office" v-model="form.select" :items="items" label="انتخاب دسته بندی"
              data-vv-name="select"></v-select>
               
          </v-col>
          
          <v-col md="6" sm="12" cols="12">
          
             
            
            <v-file-input multiple="buffer"  v-model="form.pichers " accept="image/*"  label="تصویر اگهی را بارگزاری فرمایید "></v-file-input>
          
          

          </v-col>
        </v-row>
        <v-col md="12" xs="12" sm="12" cols="12">
          <v-text-field label=" عنوان آگهی را وارد فرمایید " v-model="form.title" prepend-icon="mdi-format-title">
          </v-text-field>
        </v-col>
        <v-row>
          <v-col>
          <v-textarea counter label="متن آگهی را وارد فرمایید "  v-model="form.text"  prepend-icon="mdi-calendar-text"></v-textarea>
          
          </v-col>
        </v-row>


        <v-row>
         
          <v-btn class="my-4 mr-12 deep-purple accent-4" dense dark @click="createpost()" width="150px">ارسال </v-btn>
        </v-row>

     
      </v-form>
    </v-sheet>
  </div>
</template>
<style>

</style>