<script lang="ts" setup >import { dataToEsm } from "@rollup/pluginutils";
import { ref , reactive } from "@vue/composition-api"
  
  var form = reactive({
    title: '',
    select: '',
    pichers: '',
    text: ''
  })
   var items = ['خدمات زیبایی ', 'کاربردی ', 'گرمایشی ', 'تعمیرات ', 'اسباب کشی و جابجایی ', 'خدمات نظافت و شستوشو ', 'لوازم منزل ']
  function submit(){
    var dataCreateadd = []
    dataCreateadd.push(form)
    
  }
</script>
<template>
  <v-div class="ma-md-16 ma-5">
    <v-sheet color="white" elevation="3" height="auto" outlined rounded shaped width="100%">
      <v-form class="pa-4 px-md-14">
        <v-row>
          <v-col md="6" sm="12" cols="12">
            <v-select prepend-icon="mdi-microsoft-office" v-model="form.select" :items="items" label="انتخاب دسته بندی"
              data-vv-name="select"></v-select>
               
          </v-col>
          <v-col md="6" sm="12" cols="12">
            
            <v-file-input v-model="form.pichers" truncate-length="19"  label="تصویر اگهی را بارگزاری فرمایید "></v-file-input>
           <v-p>Message is: {{   }}</v-p>
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
  </v-div>
</template>
<style>

</style>