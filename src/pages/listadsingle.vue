<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  
let singleAd:any = ref()



var items = ['نظافت و شست و شو ', 'اسباب کشی بسته بندی', 'نصب و تعمیر لوازم منزل ', 'تعمیر و سرویس تجهیزات گرمایشی و سرمایشی ', ' نگهداری ساختمان', 'زیبایی', 'خودرو ']

let store = useCounterStores();

let adIdInside = ref(store.adId) 
     function getad() {
        // Make a request for a user with a given ID
        console.log(store.adId)
        axios.get(`https://emserver.iran.liara.run/App/Ad/${adIdInside.value}`)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
           
                singleAd.value = response.data;
                console.log(singleAd.value)
              
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    getad()

      
 let imageSingle = ref('')

 function updateAd(){
   
console.log(singleAd.value[0].Category)
console.log(singleAd)
 let a:any = imageSingle.value
  console.log("a", a.value);
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

let update:any = reactive({
      Ad_Id: singleAd.value[0]._id,
      Title: singleAd.value[0].Title,
      Description: singleAd.value[0].Description,
      Image: imgsplit[1],
      Category: singleAd.value[0].Category
})
console.log("update", update)
     axios.put('https://emserver.iran.liara.run/App/Ad/', update)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
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
    reader.readAsDataURL(a[0]);
    
  }
  
let imgAd = ref(`https://emserver.iran.liara.run/App/Ad/ADImage/${adIdInside.value}`)
let my =ref();
</script>
<template>
<div class="ma-md-16 ma-5">
<v-sheet color="white" elevation="3" height="auto" outlined rounded shaped width="100%"   v-for="(item, i) in singleAd"
          :key="i">
         
    <v-form class="pa-4 px-md-14">

          <v-row>

             <v-col md="6" sm="12" cols="12">
         دسته بندی : {{item.Category}} 
          </v-col>
           <v-col md="6" sm="12" cols="12">
           <v-img
           lazy-src="https://picsum.photos/id/11/10/6"
           max-height="250"
           max-width="100%"
           :src=imgAd
           ></v-img>
          </v-col>
        
        </v-row>


        <v-row>
           <v-col md="6" sm="12" cols="12">
            <v-select prepend-icon="mdi-microsoft-office"  :items="items" label="انتخاب دسته بندی" v-model="item.Category"
              data-vv-name="select"></v-select>
              
          </v-col>
         <v-col md="6" sm="12" cols="12">
          
             
            
            <v-file-input multiple="buffer"  v-model="imageSingle" accept="image/*"  label="تصویر اگهی را بارگزاری فرمایید "></v-file-input>
          

          </v-col>
        </v-row>
          <v-col md="12" xs="12" sm="12" cols="12">
          <v-text-field label=" عنوان آگهی را وارد فرمایید " v-model="item.Title" prepend-icon="mdi-format-title">
          </v-text-field>
        </v-col>
         <v-row>
          <v-col>
          <v-textarea counter label="متن آگهی را وارد فرمایید "  v-model="item.Description"  prepend-icon="mdi-calendar-text"></v-textarea>
          
          </v-col>
        </v-row>
          <v-row>
         
          <v-btn class="my-4 mr-12 deep-purple accent-4" dense dark @click="updateAd()" width="150px"> بروزرسانی </v-btn>
        </v-row>
        
    </v-form>
</v-sheet>
</div>
   
</template>
<style>

</style>