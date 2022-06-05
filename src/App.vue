
<script setup lang="ts">
import titlebar from './views/titlebar.vue'
import ourtor from './views/ourtor.vue'
import  useRouter   from 'vue-router';
import {ref , reactive , onBeforeMount , onBeforeUpdate , onUpdated} from '@vue/composition-api';
  import {  useCounterStores } from "./stores";
let store = useCounterStores();

 onBeforeMount(()=>{
       localStorage.setItem('loginShow', JSON.stringify(!store.loginShow))
       let covert1:any =localStorage.getItem('login')
        if(JSON.parse(covert1).Meta.status == 200){
          let covert2:any =localStorage.getItem('loginShow')
        store.loginShow = JSON.parse(covert2)
        store.logoutShow = true
          let covert3:any = localStorage.getItem('login')
              store.logindata = JSON.parse(covert3)
         
        }else{
        
           }

     })



</script>

<template>
  <v-app>
<v-main>
  <titlebar>
    
  </titlebar>
   
<router-view></router-view>
    
   

  </v-main>

 
  </v-app>
  
</template>

<style>

/* width */
::-webkit-scrollbar {
  width: 10px;
  
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:  #1976d2 ; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #311B92; 
}


</style>
