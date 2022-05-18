<script lang="ts" setup>
   import {  useCounterStores } from "../stores";  
   import {ref,reactive} from '@vue/composition-api';
    let store = useCounterStores();
    
    const props:any =  defineProps({
    adData: Array
    })
   let show = ref(false)
   
</script>

<template >
    <div>
    

   <v-sheet
    class="mx-md-4 my-md-4 my-4"
    elevation="0"
    
  >
    <v-slide-group
      
      v-model="model"
      class="pa-md-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="(item, i) in adData" :key="i"
        v-slot="{ active, toggle }"
      >
    
        <v-card
        
          v-if="item.Category=='نظافت و شست و شو '"
          
       class="mx-md-2 my-md-4"
       width="100%"
       max-width="340"
       @click="toggle"
        >
       
         
         <v-img
        :src="`https://emserver.iran.liara.run/App/Ad/ADImage/${item._id}`"
         height="200px"
        ></v-img>

          <v-card-title>
      {{item.Title}}
    </v-card-title>

    <v-card-subtitle>
      تخفیف 15 درصدی
    </v-card-subtitle>
      <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        ثبت سفارش
      </v-btn>

      <v-spacer></v-spacer>

   
    </v-card-actions>
        </v-card>
      
      </v-slide-item>
    </v-slide-group>
   </v-sheet>



  
      <v-sheet
       class="ma-md-4 my-4"
       elevation="0"
      >
    <v-slide-group
      
      v-model="model"
      class="pa-md-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="(item, i) in adData" :key="i"
        v-slot="{ active, toggle }"
        
      >
      <v-card
      v-if="item.Category=='زیبایی'"
       class="mx-md-2 my-md-4"
       width="100%"
       max-width="340"
       @click="toggle"
     >
    <v-img
      :src="`https://emserver.iran.liara.run/App/Ad/ADImage/${item._id}`"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.Title}}
    </v-card-title>

    <v-card-subtitle>
      تخفیف 15 درصدی
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        ثبت سفارش
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        
      </v-btn>
    </v-card-actions>

  
  </v-card>
      </v-slide-item>
    </v-slide-group>
      </v-sheet>


          <v-sheet
       class="ma-md-4 my-4"
       elevation="0"
      >
    <v-slide-group
      
      v-model="model"
      class="pa-md-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="(item, i) in adData" :key="i"
        v-slot="{ active, toggle }"
      >
      <v-card
      v-if="item.Category=='اسباب کشی بسته بندی'"
    class="mx-md-2 my-md-4"
    max-width="344"
    @click="toggle"
     
    
  >
    <v-img
      :src="`https://emserver.iran.liara.run/App/Ad/ADImage/${item._id}`"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.Title}}
    </v-card-title>

    <v-card-subtitle>
      تخفیف 15 درصدی
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        ثبت سفارش
      </v-btn>

      <v-spacer></v-spacer>

    
    </v-card-actions>

   
  </v-card>
      </v-slide-item>
    </v-slide-group>
         </v-sheet>

         


             <v-sheet
       class="ma-md-4 my-4"
       elevation="0"
      >
    <v-slide-group
      
      v-model="model"
      class="pa-md-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="(item, i) in adData" :key="i"
        v-slot="{ active, toggle }"
      >
      <v-card
      v-if="item.Category=='خودرو '"
    class="mx-md-2 my-md-4"
    max-width="344"
    @click="toggle"
     
    
  >
    <v-img
      :src="`https://emserver.iran.liara.run/App/Ad/ADImage/${item._id}`"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.Title}}
    </v-card-title>

    <v-card-subtitle>
      تخفیف 15 درصدی
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        ثبت سفارش
      </v-btn>

      <v-spacer></v-spacer>

    
    </v-card-actions>

   
  </v-card>
      </v-slide-item>
    </v-slide-group>
         </v-sheet>
    </div>
</template>

<style >
    .my{
        width: 20%;
    }
</style>
